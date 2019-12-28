import { ThunkAction } from 'redux-thunk'

import { api, RequestSuccess, getErrorMessage } from '../../utils/api'
import { Raid } from '../../domain/raid'
import { State } from '../'
import { Action } from './actionTypes'
import * as actions from './actions'
import * as selectors from './selectors'

export const fetchNextRaid = (): ThunkAction<
  Promise<void>,
  State,
  null,
  Action
> => async (dispatch, getState) => {
  const state = getState()

  dispatch(actions.fetchRaidsRequest())

  const cursor = selectors.getCursor(state)
  const limit = selectors.getLimit(state)

  try {
    const { data } = await api.get<RequestSuccess<Raid>>('/raids', {
      params: {
        cursor,
        limit
      }
    })

    dispatch(actions.fetchRaidsSuccess(data.data))
  } catch (err) {
    dispatch(actions.fetchRaidsFailure(getErrorMessage(err)))
  }
}
