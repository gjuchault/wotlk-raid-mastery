import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux'
import MaterialIcon from '@material/react-material-icon'

import { analyzeRaid } from '../../../store/analyze/thunks'

import styles from './RaidsViewUpload.module.css'

export const RaidsViewUpload: React.FC = () => {
  const dispatch = useDispatch()
  const onDrop = useCallback(
    async (rawFiles: File[]) => {
      dispatch(analyzeRaid(rawFiles))
    },
    [dispatch]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className={styles.raidsViewUpload} {...getRootProps()}>
      <input {...getInputProps()} />
      <MaterialIcon className={styles.icon} icon="cloud_upload" />
      {isDragActive ? (
        <p>Drop the WoWCombatLog.txt here...</p>
      ) : (
        <p>Drag'n'drop a WoWCombatLog here, or click to select files</p>
      )}
    </div>
  )
}
