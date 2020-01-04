import { CombatLog } from '../../domain/combatLog'

import {
  ANALYZE_LOGS_START,
  ANALYZE_LOGS_SUCCESS,
  ANALYZE_LOGS_FAILURE,
  CLEAR_ANALYSIS,
  SUBMIT_RAID_REQUEST,
  SUBMIT_RAID_SUCCESS,
  SUBMIT_RAID_FAILURE,
  AnalyzeLogsRequest,
  AnalyzeLogsSuccess,
  AnalyzeLogsFailure,
  ClearAnalysis,
  SubmitRaidRequest,
  SubmitRaidSuccess,
  SubmitRaidFailure
} from './actionTypes'

export const analyzeLogsRequest = (): AnalyzeLogsRequest => ({
  type: ANALYZE_LOGS_START
})

export const analyzeLogsSuccess = (log: CombatLog): AnalyzeLogsSuccess => ({
  type: ANALYZE_LOGS_SUCCESS,
  payload: log
})

export const analyzeLogsFailure = (error: string): AnalyzeLogsFailure => ({
  type: ANALYZE_LOGS_FAILURE,
  payload: error
})

export const clearAnalysis = (): ClearAnalysis => ({
  type: CLEAR_ANALYSIS
})

export const submitRaidRequest = (): SubmitRaidRequest => ({
  type: SUBMIT_RAID_REQUEST
})

export const submitRaidSuccess = (): SubmitRaidSuccess => ({
  type: SUBMIT_RAID_SUCCESS
})

export const submitRaidFailure = (error: string): SubmitRaidFailure => ({
  type: SUBMIT_RAID_FAILURE,
  payload: error
})
