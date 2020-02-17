import { Reducer } from 'redux'
import { Action, SET_MODE, SET_DETAILED_RAID_ID } from './actionTypes'

type State = {
  mode: 'players' | 'raids',
  detailedRaidId: number | null
}

const initialState: State = {
  mode: 'raids',
  detailedRaidId: null
}

export const reducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        mode: action.payload
      }
    case SET_DETAILED_RAID_ID:
      return {
        ...state,
        detailedRaidId: action.payload
      }
    default:
      return state
  }
}
