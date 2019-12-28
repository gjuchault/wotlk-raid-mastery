import { DatabaseRaid, Raid, DatabaseInstance, DatabasePlayer, Instance, DatabaseBoss, Boss, DatabaseLoot, Loot, Player } from './types'

export const parseRaid = (raid: DatabaseRaid): Raid => ({
  id: raid.id,
  date: new Date(raid.date),
  title: raid.title,
  logs: raid.logs,
  logsSum: raid.logsSum
})

export const parseInstance = (instance: DatabaseInstance): Instance => ({
  ...instance
})

export const parsePlayer = (player: DatabasePlayer): Player => ({
  ...player
})

export const parseBoss = (boss: DatabaseBoss): Boss => ({
  name: boss.name,
  heroic: Boolean(boss.heroic)
})

export const parseLoot = (loot: DatabaseLoot): Loot => ({
  ...loot
})

export const buildRaid = (raid: DatabaseRaid, instance: DatabaseInstance, players: DatabasePlayer[], bosses: DatabaseBoss[], loots: DatabaseLoot[]): Raid => ({
  ...parseRaid(raid),
  instance: parseInstance(instance),
  players: players.map(parsePlayer),
  loots: loots.map(parseLoot),
  bosses: bosses.map(parseBoss)
})
