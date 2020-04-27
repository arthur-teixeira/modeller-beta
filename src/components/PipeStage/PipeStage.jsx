import React from 'react'

import styles from './PipeStage.module.css'

import { FiMoreVertical } from 'react-icons/fi'

import { ItemCard, NewTask } from '../utils'

export default function PipeStage() {
  return (
    <div className={styles.pipeStage}>
      <div className={styles.stageHeader}>
        <h1 className={styles.stageName}>Etapa 01</h1>
        <h3 className={styles.cardAmount}>03 cards</h3>
        <div className={styles.icons}>
          <FiMoreVertical />
        </div>
      </div>
      <div className={styles.pipes}>
        <ItemCard color="#D45974" />
        <ItemCard color="#E8B967" />
        <ItemCard />
        <NewTask />
      </div>
    </div>
  )
}
