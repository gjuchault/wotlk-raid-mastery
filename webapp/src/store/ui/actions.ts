import { SET_MODE, SetMode, SetDetailedRaidId, SET_DETAILED_RAID_ID } from './actionTypes'

export const setMode = (mode: SetMode['payload']): SetMode => ({
  type: SET_MODE,
  payload: mode
})

export const setDetailedRaidId = (raidId: number | null): SetDetailedRaidId => ({
  type: SET_DETAILED_RAID_ID,
  payload: raidId
})
