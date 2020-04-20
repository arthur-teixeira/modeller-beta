import React from 'react'

import styles from './ItemCard.module.css'

import { FaRegCommentDots, FaTasks } from 'react-icons/fa'
import { GiPaperClip } from 'react-icons/gi'

export default function ItemCard({ color = "#7FADE9" }) {
  return (
    <div className={styles.itemCard} style={{ borderLeft: `15px solid ${color}` }}>
      <div className={styles.content}>
        <p className={styles.cardName}>Card name</p>
        <p className={styles.cardDesc}>Card description</p>
      </div>
      <div className={styles.deadline} style={{ backgroundColor: color }}>Prazo: 22/12</div>
      <div className={styles.icons}>
        <p className={styles.comments}>
          <FaRegCommentDots size={16} /> 22
        </p>
        <p className={styles.indexed}>
          <GiPaperClip size={16} /> 6
        </p>
        <p className={styles.tasks}>
          <FaTasks size={16} /> 7/14
        </p>
      </div>
    </div>
  )
}
