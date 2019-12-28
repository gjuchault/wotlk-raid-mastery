import { Reducer } from 'redux'
import { Action, SET_MODE } from './actionTypes'

type State = {
  mode: 'players' | 'raids'
}

const initialState: State = {
  mode: 'raids'
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
    default:
      return state
  }
}
