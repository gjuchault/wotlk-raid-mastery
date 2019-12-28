import chalk, { Chalk } from 'chalk'
import { pad } from '../helpers/pad'

export interface Log {
  error(service: string, message: string, payload?: any): void
  warn(service: string, message: string, payload?: any): void
  info(service: string, message: string, payload?: any): void
  debug(service: string, message: string, payload?: any): void
}

export type Level = 'error' | 'warn' | 'info' | 'debug'

export const buildLog = (): Log => {
  const buildMethod = (level: Level) => (
    service: string,
    message: string,
    payload?: any
  ) => {
    const timestamp = getTimestamp()
    const coloredLevel = getColoredLevel(level)

    const logParams = [
      `[${chalk.green(service)}] ${timestamp} ${coloredLevel(
        level
      )} - ${message}`
    ]

    if (payload) logParams.push(payload)

    console[level](...logParams)
  }

  return {
    debug: buildMethod('debug'),
    info: buildMethod('info'),
    warn: buildMethod('warn'),
    error: buildMethod('error')
  }
}

const getColoredLevel = (level: Level): Chalk => {
  switch (level) {
    case 'debug':
      return chalk.cyan
    case 'info':
      return chalk.green
    case 'warn':
      return chalk.yellow
    case 'error':
      return chalk.red
    default:
      return chalk.white
  }
}

const getTimestamp = (): string => {
  const now = new Date()

  const date = [
    pad(now.getFullYear()),
    pad(now.getMonth() + 1),
    pad(now.getDate())
  ]

  const time = [
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds())
  ]

  return `${date.join('/')} ${time.join(':')}`
}
