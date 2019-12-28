import { CombatLog } from '../../domain/combatLog'

export const ANALYZE_LOGS_START = 'analyze-logs/start'
export const ANALYZE_LOGS_SUCCESS = 'analyze-logs/success'
export const ANALYZE_LOGS_FAILURE = 'analyze-logs/failure'
export const CLEAR_ANALYSIS = 'analyse-logs/clear'
export const SUBMIT_RAID_REQUEST = 'submit-raid/request'
export const SUBMIT_RAID_SUCCESS = 'submit-raid/success'
export const SUBMIT_RAID_FAILURE = 'submit-raid/failure'

export interface AnalyzeLogsRequest {
  type: typeof ANALYZE_LOGS_START
}

export interface AnalyzeLogsSuccess {
  type: typeof ANALYZE_LOGS_SUCCESS
  payload: CombatLog
}

export interface AnalyzeLogsFailure {
  type: typeof ANALYZE_LOGS_FAILURE
  payload: string
}

export interface ClearAnalysis {
  type: typeof CLEAR_ANALYSIS
}

export interface SubmitRaidRequest {
  type: typeof SUBMIT_RAID_REQUEST
}

export interface SubmitRaidSuccess {
  type: typeof SUBMIT_RAID_SUCCESS
}

export interface SubmitRaidFailure {
  type: typeof SUBMIT_RAID_FAILURE
  payload: string
}

export type Action =
  | AnalyzeLogsRequest
  | AnalyzeLogsSuccess
  | AnalyzeLogsFailure
  | ClearAnalysis
  | SubmitRaidRequest
  | SubmitRaidSuccess
  | SubmitRaidFailure
