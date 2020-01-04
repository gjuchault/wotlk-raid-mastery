import React from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'
import { Raid } from '../../../domain/raid'

import styles from './RaidsListItem.module.css'

type Props = {
  raid: Raid
}

export const RaidsListItem: React.FC<Props> = ({ raid }) => {
  const icc = styles[getIcon(raid.instance.name)]

  return (
    <div className={styles.raid}>
      <div className={cx(styles.icon, icc)}></div>
      <div className={styles.raidTitle}>{raid.title}</div>
      <div className={styles.raidInstance}>({raid.instance.name})</div>
      <div className={styles.raidDate}>
        {dayjs(raid.date).format('YYYY-MM-DD')}
      </div>
    </div>
  )
}

const getIcon = (instance: string) => {
  switch (instance) {
    case 'Icecrown Citadel 25':
    case 'Icecrown Citadel 10':
      return 'icc'
    case 'Ruby Sanctum 25':
    case 'Ruby Sanctum 10':
      return 'rs'
    case 'Trial of the Crusader 25':
    case 'Trial of the Crusader 10':
      return 'toc'
    default:
      return ''
  }
}
