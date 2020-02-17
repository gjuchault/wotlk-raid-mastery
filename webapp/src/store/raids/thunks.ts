import { ThunkAction } from 'redux-thunk'

import { api, getErrorMessage } from '../../utils/api'
import { Raid } from '../../domain/raid'
import { State } from '../'
import { Action } from './actionTypes'
import * as actions from './actions'
import * as selectors from './selectors'

interface FetchRaidsResult {
  outcome: 'success'
  raids: Raid[]
}

export const fetchNextRaid = (): ThunkAction<
  Promise<void>,
  State,
  null,
  Action
> => async (dispatch, getState) => {
  const state = getState()

  dispatch(actions.fetchRaidsRequest())

  const raids = selectors.getAllRaids(state)
  const cursor = selectors.getCursor(state)
  const limit = selectors.getLimit(state)

  if (raids.length && !cursor) {
    return
  }

  try {
    const { data } = await api.get<FetchRaidsResult>('/raids', {
      params: {
        cursor,
        limit
      }
    })

    dispatch(actions.fetchRaidsSuccess(data.raids))
  } catch (err) {
    dispatch(actions.fetchRaidsFailure(getErrorMessage(err)))
  }
}
