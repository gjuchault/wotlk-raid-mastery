import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../../store'
import { Raid } from '../../domain/raid'
import { getAllRaids } from '../../store/raids/selectors'
import { fetchNextRaid } from '../../store/raids/thunks'

import { RaidsViewEmptyState } from './RaidsViewEmptyState/RaidsViewEmptyState'
import { RaidsViewLoading } from './RaidsViewLoading/RaidsViewLoading'
import { RaidsViewUpload } from './RaidsViewUpload/RaidsViewUpload'
import { RaidsViewCreate } from './RaidsViewCreate/RaidsViewCreate'
import { RaidsListItem } from './RaidsListItem/RaidsListItem'
import styles from './RaidsView.module.css'

export const RaidsView: React.FC = () => {
  const dispatch = useDispatch()
  const raids = useSelector<State, Raid[]>(getAllRaids)

  useEffect(() => {
    dispatch(fetchNextRaid())
  }, [dispatch])

  if (raids.length === 0) {
    return (
      <div className={styles.raidsView}>
        <RaidsViewLoading />
        <RaidsViewCreate />
        <RaidsViewEmptyState />
        <RaidsViewUpload />
      </div>
    )
  }

  return (
    <div className={styles.raidsView}>
      <RaidsViewLoading />
      <RaidsViewCreate />
      <RaidsViewUpload />
      {raids.map(raid => (
        <RaidsListItem key={raid.id} raid={raid} />
      ))}
    </div>
  )
}
