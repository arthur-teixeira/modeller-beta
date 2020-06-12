import React from 'react'

import styles from './CardGrid.module.css'

import { PipeCard, NewPipeCard } from '../utils'

import { AiFillStar } from 'react-icons/ai'
import { MdPerson, MdGroup } from 'react-icons/md'

export default function CardGrid() {
  return (
    <div className={styles.cardGrid}>
      <div className={styles.header}>
        <h1>Meus pipes</h1>
        <div className={styles.filters}>
          <p>Mostrar apenas:</p>
          <AiFillStar size={24} />
          <MdPerson size={24} />
          <MdGroup size={24} />
        </div>
      </div>
      <div className={styles.gridWrapper}>
        <NewPipeCard />
        <PipeCard />
        <PipeCard />
        <PipeCard />
        <PipeCard />
      </div>
    </div>
  )
}
