import { Reducer } from 'redux'
import { Player } from '../../domain/player'

type State = {
  players: Player[]
  isFetching: boolean
  error: string | null
}

const initialState: State = {
  players: [],
  isFetching: false,
  error: null
}

export const reducer: Reducer<State> = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    default:
      return state
  }
}
