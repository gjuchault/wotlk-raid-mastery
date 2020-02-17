import React from 'react'
import { Loot } from '../../../domain/raid'

interface Props {
  loots: Loot[]
}

export const RaidLootsList: React.FC<Props> = ({ loots }) => {
  return <div>
    <strong>Loots</strong>
    {loots.map((loot) => {
      return (
        <div key={loot.id}>
          {loot.wowId}
        </div>
      )
    })}
  </div>
}
