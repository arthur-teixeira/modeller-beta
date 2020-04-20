import React from 'react'

import { Sidenav, CardGrid } from '../../components'

import styles from './Dashboard.module.css'

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidenav />
      <CardGrid />
    </div>
  )
}
