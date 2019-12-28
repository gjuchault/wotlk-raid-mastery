import { Request, Response } from 'express'
import { Log } from '../../../log'
import { RaidRepository } from '../../../raid/repository'

type BuildGetOneRaidParameters = {
  raidRepository: RaidRepository
  log: Log
}

export const buildGetOneRaid = ({
  raidRepository,
  log
}: BuildGetOneRaidParameters) => async (req: Request, res: Response) => {
  log.info('raid-controller', 'fetching one raid')

  const raid = await raidRepository.fetchRaid(
    Number(req.params.id)
  )

  if (!raid) {
    return {
      outcome: 'failed',
      error: 'notFound'
    }
  }

  return {
    outcome: 'success',
    raid
  }
}
