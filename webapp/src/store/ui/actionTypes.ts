export const SET_MODE = 'ui/set_mode'
export const SET_DETAILED_RAID_ID = 'ui/set_detailed_raid_id'

export interface SetMode {
  type: typeof SET_MODE
  payload: 'players' | 'raids'
}

export interface SetDetailedRaidId {
  type: typeof SET_DETAILED_RAID_ID
  payload: number | null
}

export type Action = SetMode | SetDetailedRaidId
