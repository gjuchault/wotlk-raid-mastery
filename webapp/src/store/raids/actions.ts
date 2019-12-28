import { Raid } from '../../domain/raid'

import {
  FETCH_RAIDS_REQUEST,
  FETCH_RAIDS_SUCCESS,
  FETCH_RAIDS_FAILURE,
  SET_CURSOR,
  SET_LIMIT,
  FetchRaidsRequest,
  FetchRaidsSuccess,
  FetchRaidsFailure,
  SetCursor,
  SetLimit
} from './actionTypes'

export const fetchRaidsRequest = (): FetchRaidsRequest => ({
  type: FETCH_RAIDS_REQUEST
})

export const fetchRaidsSuccess = (raids: Raid[]): FetchRaidsSuccess => ({
  type: FETCH_RAIDS_SUCCESS,
  payload: raids
})

export const fetchRaidsFailure = (error: string): FetchRaidsFailure => ({
  type: FETCH_RAIDS_FAILURE,
  payload: error
})

export const setCursor = (cursor: string | number | null): SetCursor => ({
  type: SET_CURSOR,
  payload: cursor
})

export const setLimit = (limit: number): SetLimit => ({
  type: SET_LIMIT,
  payload: limit
})
