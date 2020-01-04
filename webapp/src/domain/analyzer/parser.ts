import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Event, CombatLog } from '../combatLog'
import { Raid } from '../raid'

dayjs.extend(utc)

export const buildParser = ({ lastModified }: { lastModified: number }) => {
  const parse = async (file: string): Promise<CombatLog> => {
    const events = file
      .split('\n')
      .filter(row => row.length > 0)
      .map(parseEvent)

    if (!events.length) {
      throw new Error('Invalid combat log')
    }

    return {
      date: events[0].date,
      logsSum: await computeSum(file),
      events: events,
      raid: {} as Raid
    }
  }

  const parseDatetime = (dateTime: string) => {
    let [date, time] = dateTime.split(' ')

    const year = dayjs.utc(lastModified).year()
    date = date.replace('/', '-')

    return dayjs.utc(`${year}-${date}T${time}`)
  }

  const parseEvent = (row: string): Event => {
    const [datetime, event] = row.split('  ')

    const [
      eventType,
      sourceGuid,
      sourceName,
      sourceFlags,
      destGuid,
      destName,
      destFlags,
      ...params
    ] = event.split(',')

    return {
      date: parseDatetime(datetime),
      eventType,
      sourceGuid: parseInt(sourceGuid, 16),
      sourceName: sourceName === 'nil' ? '' : sourceName.slice(1, -1),
      sourceFlags: parseInt(sourceFlags, 16),
      destGuid: parseInt(destGuid, 16),
      destName: destName.slice(1, -1),
      destFlags: parseInt(destFlags, 16),
      params: params.map(parseParam)
    }
  }

  const parseParam = (param: string) => {
    param = param.trim()

    if (param === 'nil') {
      return null
    }

    if (param.startsWith('0x')) {
      return parseInt(param, 16)
    }

    if (/\d+/.test(param)) {
      return parseInt(param, 10)
    }

    if (param.slice(0, 1) === '"' && param.slice(-1) === '"') {
      return param.slice(1, -1)
    }

    return param
  }

  const computeSum = async (content: string) => {
    const hashBuffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(content)
    )

    return Array.from(new Uint8Array(hashBuffer))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('')
  }

  return {
    parse
  }
}
