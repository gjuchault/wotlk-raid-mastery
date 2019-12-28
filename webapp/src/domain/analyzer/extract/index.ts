import uniqueId from 'lodash.uniqueid'

import { CombatLog } from '../../combatLog'
import { isRaidPlayer } from './unitFlag'
import { Raid } from '../../raid'
import { getClassSpecAndRole } from './classSpec'
import { getInstance } from './instance'

export const extract = (log: CombatLog) => {
  if (!log.events) {
    throw new Error(`CombatLog is missing events`)
  }

  const raid: Raid = {
    id: 1,
    date: log.date,
    title: '',
    logs: '',
    logsSum: log.logsSum,
    instance: {
      maxPlayers: 0,
      name: '',
    },
    players: [],
    loots: [],
    bosses: []
  }

  const players = new Set<string>()

  for (const entry of log.events) {
    if (isRaidPlayer(entry.sourceFlags)) {
      players.add(entry.sourceName)
    }
  }

  for (const player of Array.from(players)) {
    const classSpecAndRole = getClassSpecAndRole(log, player)

    raid.players.push({
      id: uniqueId('player-'),
      gearscore: 0,
      raidId: raid.id,
      name: player,
      ...classSpecAndRole
    })
  }

  raid.instance = {
    name: getInstance(log),
    maxPlayers: players.size > 20 ? 25 : 10
  }

  // IDEA: dps

  return raid
}
