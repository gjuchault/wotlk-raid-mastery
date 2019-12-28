import { Database } from 'sqlite3'
import { Log } from '../../log'

import { schemas } from './schemas'
import { seeders } from './seeders'

export interface SqliteFactoryParameters {
  log: Log
}

export interface Sqlite {
  open: () => Promise<void>
  ensureSchema: () => Promise<void>
  ensureSeeders: () => Promise<void>
  close: () => Promise<void>
  run: (sql: string, params?: SqlParameters) => Promise<void>
  get: <TResult>(sql: string, params?: SqlParameters) => Promise<TResult[]>
}

type SqlParameters = (string | number)[]

export const buildSqlite = ({ log }: SqliteFactoryParameters): Sqlite => {
  let database: Database

  const run = async (sql: string, params?: SqlParameters): Promise<void> =>
    new Promise(resolve => {
      expectDatabase(log, database)

      log.debug('sqlite', sql, params)

      database.run(sql, params || [], err => {
        if (err) {
          log.error('sqlite', 'sql error', err)
          process.exit(1)
        }

        resolve()
      })
    })

  const get = async <TResult>(
    sql: string,
    params?: SqlParameters
  ): Promise<TResult[]> =>
    new Promise(resolve => {
      expectDatabase(log, database)

      log.debug('sqlite', sql, params)

      database.all(sql, params || [], (err, rows) => {
        if (err) {
          log.error('sqlite', 'sql error', err)
          process.exit(1)
        }

        log.debug('sqlite', JSON.stringify(rows))

        resolve(rows || [])
      })
    })

  const open = async () => {
    log.info('sqlite', 'opening database')

    database = new Database('./database.sqlite', err => {
      if (err) {
        log.error('sqlite', 'could not open database', err)
        process.exit(1)
      }
    })
  }

  const ensureSchema = async () => {
    log.info('sqlite', 'creating schema')

    for (const schema of schemas) {
      await run(schema)
    }
  }

  const ensureSeeders = async () => {
    const seed = await get(`select seed from seeders`)

    if (seed.length > 0) {
      log.info('sqlite', 'seeding not needed')
      return
    }

    log.info('sqlite', 'seeding')

    for (const seeder of seeders) {
      await run(seeder)
    }

    await run('insert into seeders values (1)')
  }

  const close = async () =>
    new Promise<void>(resolve => {
      database.close(err => {
        if (err) {
          log.error('sqlite', 'sql error', err)
          process.exit(1)
        }

        resolve()
      })
    })

  return {
    open,
    ensureSchema,
    ensureSeeders,
    close,
    run,
    get
  }
}

const expectDatabase = (log: Log, database: Database) => {
  if (!database) {
    log.error('sqlite', 'database is not opened')
    process.exit(1)
  }
}
