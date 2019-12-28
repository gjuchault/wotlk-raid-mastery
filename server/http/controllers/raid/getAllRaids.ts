import { Request, Response } from 'express'
import Joi from '@hapi/joi'
import { Log } from '../../../log'
import { RaidRepository } from '../../../raid/repository'

type BuildGetAllRaidsParameters = {
  raidRepository: RaidRepository
  log: Log
}

const getAllRaidsQueryValidator = Joi.object({
  cursor: Joi.number().integer().optional(),
  limit: Joi.number().integer().min(1).max(10).required()
}).options({ stripUnknown: true })

export const buildGetAllRaids = ({
  raidRepository,
  log
}: BuildGetAllRaidsParameters) => async (req: Request, res: Response) => {
  log.info('raid-controller', 'fetching all raids')

  const { value: query, error } = getAllRaidsQueryValidator.validate(req.query)

  if (error) {
    return res.status(400).json({
      outcome: 'failure',
      error: 'invalidQuery'
    }).end()
  }

  const { nextCursor, data } = await raidRepository.fetchRaids(
    query.cursor,
    query.limit
  )

  return res.status(200).json({
    outcome: 'success',
    nextCursor,
    data
  }).end()
}
