import { Reducer } from 'redux'

import { Raid } from '../../domain/raid'
import {
  Action,
  FETCH_RAIDS_REQUEST,
  FETCH_RAIDS_SUCCESS,
  FETCH_RAIDS_FAILURE,
  SET_CURSOR,
  SET_LIMIT
} from './actionTypes'

export interface State {
  raids: Raid[]
  cursor: string | number | null
  limit: number
  isFetching: boolean
  error: string | null
}

const initialState: State = {
  raids: [],
  cursor: null,
  limit: 5,
  isFetching: false,
  error: null
}

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_RAIDS_REQUEST:
      return { ...state, isFetching: true }
    case FETCH_RAIDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        raids: state.raids.concat(action.payload)
      }
    case FETCH_RAIDS_FAILURE:
      return { ...state, isFetching: false, error: action.payload }
    case SET_CURSOR:
      return { ...state, cursor: action.payload }
    case SET_LIMIT:
      return { ...state, limit: action.payload }
    default:
      return state
  }
}
