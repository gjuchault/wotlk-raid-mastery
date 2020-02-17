import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { api } from '../../utils/api'
import { Raid, reshapeRaidFromApi } from '../../domain/raid'
import { RaidPlayersList } from './RaidPlayersList/RaidPlayersList'
import { RaidBossesList } from './RaidBossesList/RaidBossesList';
import { RaidLootsList } from './RaidLootsList/RaidLootsList';

import styles from './RaidView.module.css'
import { setDetailedRaidId } from '../../store/ui/actions';

interface FetchRaidResult {
  outcome: 'success'
  raid: Raid
}

interface Props {
  raidId: number
}

export const RaidView: React.FC<Props> = ({ raidId }) => {
  const [raid, setRaid] = useState<Raid>()
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const { data } = await api.get<FetchRaidResult>(`/raids/${raidId}`)

      setRaid(reshapeRaidFromApi(data.raid))
    })()
  }, [raidId])

  const handleBackButton = () => {
    dispatch(setDetailedRaidId(null))
  }

  if (!raid) {
    return null;
  }

  return (
    <div className={styles.raidView}>
      <button className={styles.back} onClick={handleBackButton}>
        <span>&times;</span>
        Close
      </button>
      <RaidPlayersList players={raid.players} />
      <RaidBossesList bosses={raid.bosses} />
      <RaidLootsList loots={raid.loots} />
    </div>
  )
}
