import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import { Player } from '../../../domain/player'
import { Raid } from '../../../domain/raid'
import { getLog } from '../../../store/analyze/selectors'
import { clearAnalysis } from '../../../store/analyze/actions'
import { submitRaid } from '../../../store/analyze/thunks'

const defaultRaid = {
  id: 0,
  date: dayjs(),
  title: '',
  logs: '',
  logsSum: '',
  instance: {
    maxPlayers: 0,
    name: ''
  },
  players: [],
  loots: [],
  bosses: []
}

export const useCreateRaidForm = () => {
  const log = useSelector(getLog)
  const [raid, setRaid] = useState<Raid>(defaultRaid)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!log || !log.raid) {
      setRaid(defaultRaid)
      return
    }

    setRaid(log.raid)
  }, [setRaid, log])

  const handleModalClose = () => dispatch(clearAnalysis())

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaid({
      date: e.currentTarget.valueAsDate
        ? dayjs(e.currentTarget.valueAsDate)
        : dayjs(),
      ...raid
    })
  }

  const handleInstanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRaid({
      ...raid,
      instance: {
        ...raid.instance,
        name: e.currentTarget.value
      }
    })
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaid({
      ...raid,
      title: e.currentTarget.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(submitRaid(raid))
  }

  const handleChangePlayerField = (playerId: string, field: keyof Player) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newFormData = {
      ...raid,
      players: raid.players!.map(player => {
        if (player.id! === playerId) {
          return {
            ...player,
            [field]: e.currentTarget.value
          }
        }

        return player
      })
    }

    setRaid(newFormData)
  }

  return {
    raid,
    handleModalClose,
    handleDateChange,
    handleInstanceChange,
    handleTitleChange,
    handleSubmit,
    handleChangePlayerField
  }
}
