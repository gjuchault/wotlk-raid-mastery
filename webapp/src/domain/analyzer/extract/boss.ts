import { CombatLog } from '../../combatLog'
import { Boss } from '../../raid'

const iccBosses = new Map([
  [70834, { name: 'Lord Marrowgar', heroic: false }], // Bone Storm 25 NM
  [70836, { name: 'Lord Marrowgar', heroic: true }], // Bone Storm 25 HM
  [71889, { name: 'Lady Deathwhisper', heroic: false }], // Frostbolt Volley 25 NM
  [72016, { name: 'Lady Deathwhisper', heroic: true }], // Frostbolt Volley 25 HM
  // [0, { name: 'Gunship Battle', heroic: false }],
  // [0, { name: 'Gunship Battle', heroic: true }],
  [72441, { name: 'Deathbringer Saurfang', heroic: false }], // Boiling Blood 25 NM
  [72443, { name: 'Deathbringer Saurfang', heroic: true }], // Boiling Blood 25 HM
  [71224, { name: 'Rotface', heroic: false }], // Mutated Infection 25 NM
  [73023, { name: 'Rotface', heroic: true }], // Mutated Infection 25 HM
  [71222, { name: 'Festergut', heroic: false }], // Blighted Spores 25 NM
  [73034, { name: 'Festergut', heroic: true }], // Blighted Spores 25 HM
  [72464, { name: 'Professor Putricide', heroic: false }], // Mutated Plague 25 NM
  [72507, { name: 'Professor Putricide', heroic: true }], // Mutated Plague 25 HM
  [72804, { name: 'Blood Prince Council', heroic: false }], // Shadow Lance 25 NM
  [72806, { name: 'Blood Prince Council', heroic: true }], // Shadow Lance 25 HM
  [71698, { name: "Blood-Queen Lana'thel", heroic: false }], // Shroud of Sorrow 25 NM
  [71700, { name: "Blood-Queen Lana'thel", heroic: true }], // Shroud of Sorrow 25 HM
  [71733, { name: 'Valithria Dreamwalker', heroic: false }], // Acid Burst (Zombie) 25 NM
  [72018, { name: 'Valithria Dreamwalker', heroic: true }], // Acid Burst (Zombie) 25 HM
  [71050, { name: 'Sindragosa', heroic: false }], // Frost Aura 25 NM
  [71052, { name: 'Sindragosa', heroic: true }], // Frost Aura 25 HM
  [73779, { name: 'The Lich King', heroic: false }], // Infest 25 NM
  [73781, { name: 'The Lich King', heroic: true }] // Infest 25 HM
])

export const getKilledBoss = (log: CombatLog) => {
  const bosses: Boss[] = []
  const bossNames: string[] = []

  const bossSpellIds = Array.from(iccBosses.keys())

  const spellEvents = log.events
    .filter(({ eventType, params }) => {
      return eventType.startsWith('SPELL_') && bossSpellIds.includes(params[0])
    })

  for (const event of spellEvents) {
    const boss = iccBosses.get(event.params[0])

    if (!boss) continue
    if (bossNames.includes(boss.name)) continue

    // memoize
    bossNames.push(boss.name)

    // find if boss has been killed
    const bossGuid = event.sourceGuid
    const isBossDead = log.events.find(
      deathEvent =>
        deathEvent.eventType === 'PARTY_KILL' &&
        deathEvent.destGuid === bossGuid
    )

    if (isBossDead) {
      bosses.push(boss)
    }
  }

  return bosses
}
