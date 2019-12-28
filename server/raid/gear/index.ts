import memoize from 'mem'
import axios from 'axios'

import {
  scale,
  gearScoreFormulaA,
  gearScoreFormulaB,
  slotWeight
} from './constants'

const _getItemGearScore = async (
  itemId: number | string,
  isFuryWarrior: boolean = false
) => {
  let qualityScale = 1

  const { data } = await axios.get(`https://db.rising-gods.de/?item=${itemId}&xml`)

  const qualityRegex = /<quality id="(\d+)">/g.exec(data)
  const ilvlRegex = /<level>(\d+)<\/level>/g.exec(data)
  const slotRegex = /<inventorySlot id="(\d+)">/g.exec(data)

  if (
    !qualityRegex ||
    !qualityRegex[1] ||
    !ilvlRegex ||
    !ilvlRegex[1] ||
    !slotRegex ||
    !slotRegex[1]
  ) {
    throw new Error(`Item ${itemId} not found`)
  }

  let quality = parseInt(qualityRegex[1], 10)
  let ilvl = parseInt(ilvlRegex[1], 10)
  let slot = parseInt(slotRegex[1], 10)

  if (quality === 5) {
    qualityScale = 1.3
    quality = 4
  } else if (quality === 0 || quality === 1) {
    qualityScale = 0.005
    quality = 2
  } else if (quality === 7) {
    quality = 3
    ilvl = 187.05
  }

  let gs = 0

  if (ilvl >= 120) {
    gs =
      ((ilvl - gearScoreFormulaA[quality - 2][0]) /
        gearScoreFormulaA[quality - 2][1]) *
      scale *
      qualityScale *
      slotWeight[slot]
  } else {
    gs =
      ((ilvl - gearScoreFormulaB[quality - 1][0]) /
        gearScoreFormulaB[quality - 1][1]) *
      scale *
      qualityScale *
      slotWeight[slot]
  }

  gs = Math.floor(Math.max(0, gs))

  if (slot === 17 && isFuryWarrior) {
    gs = Math.floor(gs / 2)
  }

  return gs
}

export const getItemGearScore = memoize(_getItemGearScore, {
  cacheKey: ([itemId, isFuryWarrior]) => `${itemId}-${isFuryWarrior}`
})

interface CharacterResponse {
  class: string
  talents: {
    tree: string
  }[]
  equipment: {
    item: string
  }[]
}

interface CharacterError {
  error: string
}

export const getGearscoreForPlayer = async (name: string): Promise<number> => {

  // IDEA: variable server?
  // IDEA: get gear from addon
  const { data } = await axios.get<CharacterResponse | CharacterError>(`https://armory.warmane.com/api/character/${name}/Lordaeron/summary`)

  if ((data as CharacterError).error) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return getGearscoreForPlayer(name)
  }

  const { class: characterClass, talents, equipment } = data as CharacterResponse

  let gs = 0

  const isFuryWarrior = characterClass === 'Warrior' && talents.some(({ tree }) => tree === 'Fury')

  for (const { item } of equipment) {
    gs += await getItemGearScore(item, isFuryWarrior)
  }

  return gs
}
