import { Raid } from '../../raid'

const iccBosses = [
  'Lord Marrowgar',
  'Lady Deathwhisper',
  'Gunship Battle',
  'Deathbringer Saurfang',
  'Rotface',
  'Festergut',
  'Professor Putricide',
  'Blood Prince Council',
  "Blood-Queen Lana'thel",
  'Valithria Dreamwalker',
  'Sindragosa',
  'The Lich King'
]

export const getInstance = (raid: Raid) => {
  for (const boss of raid.bosses) {
    if (iccBosses.includes(boss.name)) {
      return 'Icecrown Citadel'
    }
  }

  return ''
}
