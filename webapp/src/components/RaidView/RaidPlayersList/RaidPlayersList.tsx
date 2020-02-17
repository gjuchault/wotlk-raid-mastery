import React from 'react'
import cx from 'classnames'
import { Player, PlayerRole } from '../../../domain/player'
import { ClassIcon, SpecIcon, RoleIcon } from '../../Icon/Icon'

import styles from './RaidPlayersList.module.css'

interface Props {
  players: Player[]
}

const priorities = {
  [PlayerRole.Tank]: 0,
  [PlayerRole.Healer]: 1,
  [PlayerRole.MeleeDps]: 2,
  [PlayerRole.RangedDps]: 3
}

export const RaidPlayersList: React.FC<Props> = ({ players }) => {
  const sortedPlayers = players.sort((left, right) => {
    if (right.role === left.role) {
      return right.name.localeCompare(left.name)
    }

    return priorities[left.role] - priorities[right.role]
  })

  return (
    <div className={styles.raidPlayersList}>
      <strong className={styles.title}>Players</strong>
      <div className={styles.header}>Name</div>
      <div className={styles.header}>Gearscore</div>
      <div className={styles.header}>Role</div>
      <div className={styles.header}>Class</div>
      <div className={styles.header}>Spec</div>
      {sortedPlayers.map(player => {
        return [
          <div className={styles.item} key={`id-${player.id}`}>
            {player.name}
          </div>,
          <div
            className={cx(styles.item, styles.right)}
            key={`gs-${player.id}`}
          >
            {player.gearscore}
          </div>,
          <div
            className={cx(styles.item, styles.center)}
            key={`role-${player.id}`}
          >
            <RoleIcon role={player.role} />
          </div>,
          <div
            className={cx(styles.item, styles.center)}
            key={`class-${player.id}`}
          >
            <ClassIcon playerClass={player.class} />
          </div>,
          <div
            className={cx(styles.item, styles.center)}
            key={`spec-${player.id}`}
          >
            <SpecIcon spec={player.spec} />
          </div>
        ]
      })}
    </div>
  )
}
