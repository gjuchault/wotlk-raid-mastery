import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

import { Storage } from '../storage'
import { Config } from '../config'
import { Log } from '../log'

import { buildGetAllRaids } from './controllers/raid/getAllRaids'
import { buildGetOneRaid } from './controllers/raid/getOneRaid'
import { buildCreateRaid } from './controllers/raid/createRaid'
import { buildRaidRepository } from '../raid/repository'

export interface HttpFactoryParameters {
  storage: Storage
  config: Config
  log: Log
}

export interface Http {
  listen: () => void
}

export const buildHttp = ({
  storage,
  config,
  log
}: HttpFactoryParameters): Http => {
  log.info('http', 'creating http instance')

  const raidRepository = buildRaidRepository({ storage, log })
  const getAllRaids = buildGetAllRaids({ raidRepository, log })
  const getOneRaid = buildGetOneRaid({ raidRepository, log })
  const createRaid = buildCreateRaid({ raidRepository, log })

  const app = express()

  app.use(helmet())
  app.use(cors())

  app.use(bodyParser.json())

  app.get('/api/raids', getAllRaids)
  app.get('/api/raids/:id', getOneRaid)
  app.post('/api/raids', createRaid)

  const listen = async () => {
    const { address, port } = config.http

    app.listen(port, address)

    log.info('http', `listening on ${address}:${port}`)
  }

  return {
    listen
  }
}
