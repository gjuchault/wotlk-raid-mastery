import axios, { AxiosError } from 'axios'

export interface RequestSuccess<TResult> {
  outcome: 'result'
  data: TResult[]
}

export interface RequestFailure {
  outcome: 'failure'
  error: string
}

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 0
})

export const getErrorMessage = (err: AxiosError<RequestFailure>) => {
  if (err.response && err.response.data && err.response.data.error) {
    return err.response.data.error
  }

  return err.message
}
