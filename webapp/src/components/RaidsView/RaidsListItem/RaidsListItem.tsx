import React from 'react'
import dayjs from 'dayjs'
import { Raid } from '../../../domain/raid'

import styles from './RaidsListItem.module.css'

type Props = {
  raid: Raid
}

export const RaidsListItem: React.FC<Props> = ({ raid }) => {
  return (
    <div className={styles.raid}>
      {raid.title} - {dayjs(raid.date).format('YYYY-MM-DD')} ({raid.instance.name})
    </div>
  )
}
