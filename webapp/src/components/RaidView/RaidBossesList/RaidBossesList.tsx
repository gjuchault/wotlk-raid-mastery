import React from 'react'
import cx from 'classnames'
import { Boss } from '../../../domain/raid'
import { BossIcon, HeroicIcon } from '../../Icon/Icon'

import styles from './RaidBossesList.module.css'

interface Props {
  bosses: Boss[]
}

const priorities = [
  'Lord Marrowgar',
  'Lady Deathwhisper',
  'Gunship Battle',
  'Deathbringer Saurfang',
  'Rotface',
  'Festergut',
  'Professor Putricide',
  'Blood Prince Council',
  "Blood-Queen Lana'thel",
  'Valithria',
  'Sindragosa',
  'The Lich King'
]

export const RaidBossesList: React.FC<Props> = ({ bosses }) => {
  const sortedBosses = bosses.sort((left, right) => {
    return priorities.indexOf(left.name) - priorities.indexOf(right.name)
  })

  return (
    <div className={styles.raidBossesList}>
      <strong className={styles.title}>Bosses</strong>
      <div className={styles.header}></div>
      <div className={styles.header}>Name</div>
      <div className={styles.header}>Heroic</div>
      {sortedBosses.map(boss => {
        return [
          <div
            className={cx(styles.item, styles.center)}
            key={`icon-${boss.name}`}
          >
            <BossIcon boss={boss.name} />
          </div>,
          <div className={styles.item} key={`name-${boss.name}`}>
            {boss.name}
          </div>,
          <div
            className={cx(styles.item, styles.right)}
            key={`heroic-${boss.heroic}`}
          >
            <HeroicIcon heroic={boss.heroic} />
          </div>,
        ]
      })}
    </div>
  )
}
