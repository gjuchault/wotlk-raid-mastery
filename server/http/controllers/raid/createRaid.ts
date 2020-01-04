import { Request, Response } from 'express'
import Joi from '@hapi/joi'

import { Log } from '../../../log'
import { RaidRepository } from '../../../raid/repository'

type CreateRaidParameters = {
  raidRepository: RaidRepository
  log: Log
}

type RaidBody = {
  title: string
  instance: string
  maxPlayers: number
  date: string
  logsSum: string
  bosses: {
    name: string
    heroic: boolean
  }[]
  players: {
    name: string
    class: string
    spec: string
    role: string
  }[]
}

const createRaidBodyValidator = Joi.object({
  title: Joi.string().required(),
  instance: Joi.string().required(),
  maxPlayers: Joi.number().required(),
  date: Joi.string().required(),
  logsSum: Joi.string().required(),
  bosses: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    heroic: Joi.bool().required()
  })),
  players: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    class: Joi.string().required(),
    spec: Joi.string().required(),
    role: Joi.string().required()
  }).required()).required()
}).options({ stripUnknown: true })

export const buildCreateRaid = ({
  raidRepository,
  log
}: CreateRaidParameters) => async (req: Request, res: Response) => {
  log.info('raid-controller', 'creating a raid')

  const { value: raid, errors } = createRaidBodyValidator.validate(req.body)

  if (errors) {
    return res.status(400).json({
      outcome: 'failure',
      error: 'invalidQuery'
    }).end()
  }

  await raidRepository.createRaid(raid as RaidBody)

  return res.status(200).json({
    outcome: 'success'
  }).end()
}
