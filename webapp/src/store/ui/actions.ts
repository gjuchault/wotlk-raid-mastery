import { SET_MODE, SetMode } from './actionTypes'

export const setMode = (mode: SetMode['payload']): SetMode => ({
  type: SET_MODE,
  payload: mode
})
