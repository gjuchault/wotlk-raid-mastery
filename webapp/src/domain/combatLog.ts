import dayjs from 'dayjs'
import { Raid } from './raid'

export interface CombatLog {
  date: dayjs.Dayjs
  logsSum: string
  events: Event[]
  raid: Raid
}

export interface Event {
  date: dayjs.Dayjs
  eventType: string
  sourceGuid: number
  sourceName: string
  sourceFlags: number
  destGuid: number
  destName: string
  destFlags: number
  params: any[]
}
