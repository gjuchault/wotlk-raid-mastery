import { ThunkAction } from 'redux-thunk'

import { analyseCombatLog } from '../../domain/analyzer'
import { Raid } from '../../domain/raid'
import { State } from '../'
import { Action } from './actionTypes'
import * as actions from './actions'

import { api } from '../../utils/api'

export const analyzeRaid = (
  rawFiles: File[]
): ThunkAction<Promise<void>, State, null, Action> => async dispatch => {
  dispatch(actions.analyzeLogsRequest())

  try {
    for (const rawFile of rawFiles) {
      const combatLog = await analyseCombatLog(rawFile)

      dispatch(
        actions.analyzeLogsSuccess({
          date: combatLog.date,
          logsSum: combatLog.logsSum,
          raid: combatLog.raid,
          events: []
        })
      )
    }
  } catch (err) {
    dispatch(actions.analyzeLogsFailure(err))
  }
}

export const submitRaid = (
  payload: Raid
): ThunkAction<Promise<void>, State, null, Action> => async dispatch => {
  dispatch(actions.submitRaidRequest())

  try {
    api.post('raids', {
      title: payload.title,
      date: payload.date,
      logsSum: payload.logsSum,
      instance: payload.instance.name,
      bosses: payload.bosses,
      maxPlayers: payload.instance.maxPlayers,
      players: payload.players
    })

    dispatch(actions.submitRaidSuccess())
  } catch (err) {
    dispatch(actions.submitRaidFailure(err))
  }
}
