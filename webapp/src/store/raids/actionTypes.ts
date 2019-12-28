import { Raid } from '../../domain/raid'

export const FETCH_RAIDS_REQUEST = 'raids/fetch/request'
export const FETCH_RAIDS_SUCCESS = 'raids/fetch/success'
export const FETCH_RAIDS_FAILURE = 'raids/fetch/failure'
export const SET_CURSOR = 'raids/set_cursor'
export const SET_LIMIT = 'raids/set_limit'

export interface FetchRaidsRequest {
  type: typeof FETCH_RAIDS_REQUEST
}

export interface FetchRaidsSuccess {
  type: typeof FETCH_RAIDS_SUCCESS
  payload: Raid[]
}

export interface FetchRaidsFailure {
  type: typeof FETCH_RAIDS_FAILURE
  payload: string
}

export interface SetCursor {
  type: typeof SET_CURSOR
  payload: string | number | null
}

export interface SetLimit {
  type: typeof SET_LIMIT
  payload: number
}

export type Action =
  | FetchRaidsRequest
  | FetchRaidsSuccess
  | FetchRaidsFailure
  | SetCursor
  | SetLimit
