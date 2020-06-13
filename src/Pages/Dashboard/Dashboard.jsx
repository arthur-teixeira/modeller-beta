import React from 'react'

import { Sidenav, CardGrid, HeaderWithSearchbar } from '../../components'

import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <>
      <HeaderWithSearchbar />
      <div className={styles.dashboardContainer}>
        <Sidenav />
        <CardGrid />
      </div>
    </>
  )
}
