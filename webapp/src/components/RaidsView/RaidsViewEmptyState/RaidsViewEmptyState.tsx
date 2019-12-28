import React from 'react'

import styles from './RaidsViewEmptyState.module.css'

export const RaidsViewEmptyState: React.FC = () => (
  <div className={styles.raidsViewEmptyState}>
    <h3>No raid data yet</h3>
  </div>
)
