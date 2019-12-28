import React from 'react'
import { useSelector } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'

import { getIsAnalyzing } from '../../../store/analyze/selectors'

import styles from './RaidsViewLoading.module.css'

export const RaidsViewLoading: React.FC = () => {
  const isAnalyzing = useSelector(getIsAnalyzing)

  if (!isAnalyzing) {
    return null
  }

  return (
    <div className={styles.raidsViewLoading}>
      <MaterialIcon className={styles.icon} icon="autorenew" />
      <h2>Analyzing combat logs</h2>
    </div>
  )
}
