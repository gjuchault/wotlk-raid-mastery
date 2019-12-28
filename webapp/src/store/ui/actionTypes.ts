export const SET_MODE = 'ui/set_mode'

export interface SetMode {
  type: typeof SET_MODE
  payload: 'players' | 'raids'
}

export type Action = SetMode
