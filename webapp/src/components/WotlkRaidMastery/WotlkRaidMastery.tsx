import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { RaidsView } from '../RaidsView/RaidsView'
import styles from './WotlkRaidMastery.module.css'

export const WotlkRaidMastery: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>WotLK Raid Mastery</h1>
      </header>

      <Tabs className={styles.view}>
        <TabList className={styles.tabs}>
          <Tab className={styles.tab}>Raids</Tab>
          <Tab className={styles.tab}>Players</Tab>
        </TabList>

        <TabPanel className={styles.tabsView}>
          <RaidsView />
        </TabPanel>
        <TabPanel className={styles.tabsView}>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}
