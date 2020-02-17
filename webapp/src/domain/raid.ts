import dayjs from 'dayjs'
import { Player } from './player'

export interface Raid {
  id: number
  date: dayjs.Dayjs
  title: string
  logs: string
  logsSum: string
  instance: Instance
  players: Player[]
  loots: Loot[]
  bosses: Boss[]
}

export interface Instance {
  name: string
  maxPlayers: number
}

export interface Boss {
  name: string
  heroic: boolean
}

export interface Loot {
  id: number
  raidId: number
  playerId: number
  wowId: number
}

export const reshapeRaidFromApi = (raid: any): Raid => ({
  id: raid.id,
  date: dayjs(raid.date),
  title: raid.title,
  logs: '',
  logsSum: raid.logsSum,
  instance: {
    name: raid.instance.name,
    maxPlayers: raid.instance.maxPlayers,
  },
  players: raid.players,
  loots: raid.loots,
  bosses: raid.bosses
})
