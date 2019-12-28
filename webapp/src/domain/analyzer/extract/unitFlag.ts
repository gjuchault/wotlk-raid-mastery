export const isRaidPlayer = (unitFlag: number) => {
  return (
    isPlayer(unitFlag) &&
    isPlayerControlled(unitFlag) &&
    isFriendly(unitFlag) &&
    isAffiliationBelowRaid(unitFlag)
  )
}

export const isPlayer = (unitFlag: number) => Boolean(0x00000400 & unitFlag)
export const isPlayerControlled = (unitFlag: number) =>
  Boolean(0x00000100 & unitFlag)
export const isFriendly = (unitFlag: number) => Boolean(0x00000010 & unitFlag)
export const isAffiliationBelowRaid = (unitFlag: number) =>
  Boolean(0x00000004 & unitFlag) ||
  Boolean(0x00000002 & unitFlag) ||
  Boolean(0x00000001 & unitFlag)
