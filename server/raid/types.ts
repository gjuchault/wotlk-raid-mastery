export interface Raid {
  id: number
  date: Date
  title: string
  logs: string
  logsSum: string
  instance?: Instance
  players?: Player[]
  loots?: Loot[]
  bosses?: Boss[]
}

export interface DatabaseRaid {
  id: number
  date: number
  title: string
  instance: string
  logs: string
  logsSum: string
}

export interface Instance {
  name: string
  maxPlayers: number
}

export interface DatabaseInstance {
  name: string
  maxPlayers: number
}

export interface Player {
  name: string
  gearscore: number
  raidId: number
  class: number
  role: number
}

export interface DatabasePlayer {
  name: string
  gearscore: number
  raidId: number
  class: number
  role: number
}

export enum Class {
  DeathKnight,
  Warrior,
  Paladin,
  Druid,
  Hunter,
  Warlock,
  Mage,
  Shaman,
  Priest,
  Rogue
}

export enum Role {
  Tank,
  Healer,
  RangedDps,
  MeleeDps
}

export interface Boss {
  name: string
  heroic: boolean
}

export interface DatabaseBoss {
  name: string
  heroic: boolean
}

export interface Loot {
  id: number
  raidId: number
  playerId: number
  wowId: number
}

export interface DatabaseLoot {
  id: number
  raidId: number
  playerId: number
  wowId: number
}
