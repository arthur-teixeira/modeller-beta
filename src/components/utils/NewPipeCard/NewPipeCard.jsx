import React from 'react'

import styles from './NewPipeCard.module.css'

import { FiPlus } from 'react-icons/fi'

export default function NewPipeCard() {
  return (
    <div className={styles.pipeCard}>
      <div className={styles.icon}>
        <FiPlus size={36} color="#FFF" />
      </div>
      <p>Novo pipe</p>
    </div>
  )
}
