import { Reducer } from 'redux'

import { CombatLog } from '../../domain/combatLog'
import {
  Action,
  ANALYZE_LOGS_START,
  ANALYZE_LOGS_SUCCESS,
  ANALYZE_LOGS_FAILURE,
  CLEAR_ANALYSIS,
  SUBMIT_RAID_REQUEST,
  SUBMIT_RAID_SUCCESS,
  SUBMIT_RAID_FAILURE
} from './actionTypes'

export interface State {
  log: CombatLog | null
  isLoading: boolean
  isFetching: boolean
  error: string | null
}

const initialState: State = {
  log: null,
  isLoading: false,
  isFetching: false,
  error: null
}

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ANALYZE_LOGS_START:
      return { ...state, isLoading: true }
    case ANALYZE_LOGS_SUCCESS:
      return {
        ...state,
        log: action.payload,
        isLoading: false
      }
    case ANALYZE_LOGS_FAILURE:
      return { ...state, isLoading: false, error: action.payload }
    case CLEAR_ANALYSIS:
      return initialState
    case SUBMIT_RAID_REQUEST:
      return { ...state, isFetching: true }
    case SUBMIT_RAID_SUCCESS:
      return { ...state, isFetching: false }
    case SUBMIT_RAID_FAILURE:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state
  }
}
