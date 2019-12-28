import { CombatLog } from '../../combatLog'

const someIccBosses = [
  // lady deathwhisper
  0xF130008FF70000D8,
  // deathbringer saurfang
  0xF1500093B500004B,
  // rotface
  0xF130008F1300019D,
  // valithria
  0xF130008FB5000566,
  // sindragosa
  0xF130008FF5000263,
  // lich king
  0xF130008EF500099B
]

const someTocBosses = [
  // fojla
  0xF1300086C1000150,
  // eydis
  0xF1300086C0000153
]

export const getInstance = (log: CombatLog) => {
  if (!log.events) {
    throw new Error(`CombatLog is missing events`)
  }

  const destGuids = log.events.map((event) => event.destGuid)

  for (const boss of someIccBosses) {
    if (destGuids.includes(boss)) {
      return 'Icecrown Citadel'
    }
  }

  for (const boss of someTocBosses) {
    if (destGuids.includes(boss)) {
      return 'Trial of the Crusader'
    }
  }

  return 'Ruby Sanctum'
}
