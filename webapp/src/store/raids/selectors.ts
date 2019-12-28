import { State } from '..'

export const getAllRaids = (state: State) => state.raids.raids

export const getCursor = (state: State) => state.raids.cursor
export const getLimit = (state: State) => state.raids.limit
