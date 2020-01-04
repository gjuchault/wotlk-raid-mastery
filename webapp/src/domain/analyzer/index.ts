import { Raid } from '../raid'
import { buildParser } from './parser'
import { extract } from './extract'
import { CombatLog } from '../combatLog'
import { read } from '../../utils/read'
import { filesize } from '../../utils/filesize'

export interface Meta {
  lastModified: number
}

export const analyseCombatLog = async (rawFile: File): Promise<CombatLog> => {
  console.log(
    `[analyzer] Starting analyzing ${rawFile.name} (${filesize(rawFile.size)})`
  )

  const start = Date.now()

  const content = await read(rawFile)

  console.log(`[analyzer] Reading file ${rawFile.name}: ${ms(start)}`)
  let log: CombatLog | null = null
  let raid: Raid | null = null

  const parser = buildParser(rawFile)
  log = await parser.parse(content)

  console.log(
    `[analyzer] Parsing entries for file ${rawFile.name}: ${ms(start)}`
  )

  raid = extract(log)

  console.log(
    `[analyzer] Extracting raid for file ${rawFile.name}: ${ms(start)}`
  )

  console.log(`[analyzer] Results for file ${rawFile.name}`, log, raid)

  return {
    date: log.date,
    events: log.events,
    logsSum: log.logsSum,
    raid
  }
}

export const ms = (start: number) => `${Date.now() - start}ms`
