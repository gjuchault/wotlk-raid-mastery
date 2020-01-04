import React from 'react'
import Modal from 'react-modal'
import cx from 'classnames'

import {
  getSpecsFromClass,
  getRolesFromClass,
  getSpecName
} from '../../../domain/player'

import styles from './RaidsViewCreate.module.css'
import { useCreateRaidForm } from './useCreateRaidForm'

Modal.setAppElement('#root')

export const RaidsViewCreate: React.FC = () => {
  const {
    raid,
    handleModalClose,
    handleDateChange,
    handleInstanceChange,
    handleTitleChange,
    handleSubmit,
    handleChangePlayerField
  } = useCreateRaidForm()

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,.6)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'var(--theme-dark)',
      border: '1px solid rgba(255,255,255,.3)'
    }
  }

  if (!raid || !raid.id) {
    return null
  }

  return (
    <Modal isOpen style={modalStyles} onRequestClose={handleModalClose}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="title"
            value={raid.title}
            onChange={handleTitleChange}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={raid.date.format('YYYY-MM-DD')}
            onChange={handleDateChange}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="instance">Instance</label>
          <select
            value={raid.instance!.name || 'unknown'}
            onChange={handleInstanceChange}
          >
            <option value="unknown" disabled>
              Unknown
            </option>
            <option value="Icecrown Citadel">Icecrown Citadel</option>
            <option value="Trial of the Crusader">Trial of the Crusader</option>
            <option value="Ruby Sanctum">Ruby Sanctum</option>
          </select>
        </div>

        <div className={cx(styles.row, styles.category)}>
          <strong>Players</strong>
        </div>
        {raid.players.map(player => {
          return (
            <div key={player.id!} className={styles.row}>
              <input
                type="text"
                value={player.name}
                onChange={handleChangePlayerField(player.id!, 'name')}
              />

              <select
                value={player.class || 'unknown'}
                onChange={handleChangePlayerField(player.id!, 'class')}
              >
                <option value="unknown" disabled>
                  Unknown
                </option>
                <option value="DeathKnight">Death Knight</option>
                <option value="Warrior">Warrior</option>
                <option value="Paladin">Paladin</option>
                <option value="Druid">Druid</option>
                <option value="Hunter">Hunter</option>
                <option value="Warlock">Warlock</option>
                <option value="Mage">Mage</option>
                <option value="Shaman">Shaman</option>
                <option value="Priest">Priest</option>
                <option value="Rogue">Rogue</option>
              </select>

              <select
                value={player.spec || 'unknown'}
                onChange={handleChangePlayerField(player.id!, 'spec')}
              >
                <option value="unknown" disabled>
                  Unknown
                </option>
                {getSpecsFromClass(player.class).map(spec => {
                  return [
                    <option key={spec} value={spec}>
                      {getSpecName(spec)}
                    </option>
                  ]
                })}
              </select>

              <select
                value={player.role || 'unknown'}
                onChange={handleChangePlayerField(player.id!, 'role')}
              >
                <option value="unknown" disabled>
                  Unknown
                </option>
                {getRolesFromClass(player.class).map(role => {
                  return [
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ]
                })}
              </select>
            </div>
          )
        })}

        <div className={styles.row}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  )
}
