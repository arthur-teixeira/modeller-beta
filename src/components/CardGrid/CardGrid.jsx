import React from 'react'

import styles from './CardGrid.module.css'

import { PipeCard } from '../utils'

export default function CardGrid() {
  return (
    <div className={styles.cardGrid}>
      <div className={styles.gridWrapper}>
        <PipeCard />
        <PipeCard />
        <PipeCard />
        <PipeCard />
        <PipeCard />
        <PipeCard />
      </div>
    </div>
  )
}
