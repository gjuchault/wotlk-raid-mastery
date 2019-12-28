import { Storage } from '../storage'
import { Log } from '../log'
import { DatabaseRaid, Raid, DatabaseInstance, DatabasePlayer, DatabaseBoss, DatabaseLoot } from './types'
import { parseRaid, buildRaid } from './transform'
import { PaginatedResults } from '../helpers/pagination'

import { getGearscoreForPlayer } from './gear'

export interface RaidRepositoryParameters {
  storage: Storage,
  log: Log
}

export interface RaidBody {
  title: string
  instance: string
  maxPlayers: number
  date: string
  logsSum: string
  players: {
    name: string
    class: string
    spec: string
    role: string
  }[]
}

export interface RaidRepository {
  fetchRaids: (offset?: number, limit?: number) => Promise<PaginatedResults<Raid>>
  fetchRaid: (raidId: number) => Promise<Raid | null>
  createRaid: (raid: RaidBody) => Promise<void>
}

export const buildRaidRepository = ({ storage, log }: RaidRepositoryParameters): RaidRepository => {
  const fetchRaids = async (offset = 0, limit = 5) => {
    const dbRaids = await storage.get<DatabaseRaid>(
      `
        select
          *
        from raids
        limit ?
        offset ?
      `,
      [ limit + 1, offset ]
    )

    const raids = await Promise.all(dbRaids.map(async (raid) => {
      const [instance] = await storage.get<DatabaseInstance>(
        `
          select
            *
          from instances
          where name = ?
        `,
        [ raid.instance ]
      )

      return {
        ...parseRaid(raid),
        instance
      }
    }))

    return {
      nextCursor: raids.length > limit ? offset + limit : null,
      data: raids.slice(0, limit)
    }
  }

  const fetchRaid = async (raidId: number) => {
    const [raid] = await storage.get<DatabaseRaid>(
      `
        select
          *
        from raids
        where id = ?
    `,
      [ raidId ]
    )

    if (!raid) {
      return null
    }

    const [instance] = await storage.get<DatabaseInstance>(
      `
        select
          *
        from instances
        where name = ?
      `,
      [ raid.instance ]
    )

    const players = await storage.get<DatabasePlayer>(
      `
        select
          *
        from players
        where raidId = ?
      `,
      [ raid.id ]
    )

    const bosses = await storage.get<DatabaseBoss>(
      `
        select
          b.*
        from raidBosses rb
        join bosses b on rb.bossId = b.id
        where rb.raidId = ?
      `,
      [ raid.id ]
    )

    const loots = await storage.get<DatabaseLoot>(
      `
        select
          *
        from loots
        where raidId = ?
      `,
      [ raid.id ]
    )

    return buildRaid(raid, instance, players, bosses, loots)
  }

  const createRaid = async (raid: RaidBody) => {
    log.info('raid', `Creating raid ${raid.title}`, raid)

    await storage.run(`
      insert into
        raids (date, title, instance, logsSum)
      values (?, ?, ?, ?)
    `, [
      raid.date,
      raid.title,
      `${raid.instance} ${raid.maxPlayers}`,
      raid.logsSum
    ])

    const [{raidId}] = await storage.get<{ raidId: number }>(`select last_insert_rowid() as raidId`)

    for (const player of raid.players) {
      let gearscore = 0
      try {
        gearscore = await getGearscoreForPlayer(player.name)
      } catch (err) {
        log.error('raid', `Couldn't fetch gearscore for ${player.name}`, err)
      }

      await storage.run(`
        insert into
          players (name, gearscore, raidId, class, spec, role)
        values (?, ?, ?, ?, ?, ?)
      `, [
        player.name,
        gearscore,
        raidId,
        player.class,
        player.spec,
        player.role
      ])
    }
  }

  return {
    fetchRaids,
    fetchRaid,
    createRaid
  }
}
