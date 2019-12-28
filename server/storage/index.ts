import { buildSqlite, Sqlite } from './sqlite'
import { Log } from '../log'

export interface StorageFactoryParameters {
  log: Log
}

export interface Storage {
  open: () => Promise<void>
  close: () => Promise<void>
  get: Sqlite['get']
  run: Sqlite['run']
}

export const buildStorage = ({ log }: StorageFactoryParameters): Storage => {
  log.info('storage', 'creating storage instance')

  const sqlite = buildSqlite({ log })

  const open = async () => {
    log.info('storage', 'opening storage')

    await sqlite.open()
    await sqlite.ensureSchema()
    await sqlite.ensureSeeders()
  }

  const close = async () => {
    log.info('storage', 'closing storage')

    await sqlite.close()
  }

  return {
    open,
    close,
    get: sqlite.get,
    run: sqlite.run
  }
}
