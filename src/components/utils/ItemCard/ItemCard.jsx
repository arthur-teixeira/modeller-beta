import React from 'react'

import styles from './ItemCard.module.css'

import { FaRegCommentDots, FaTasks } from 'react-icons/fa'
import { GiPaperClip } from 'react-icons/gi'

export default function ItemCard({ data }) {

  const handleType = t => {

    switch (t) {
      default:
        return "#7FADE9"
      case "medium":
        return "#E8B967"
      case "high":
        return "#D45974"
    }
  }

  const color = handleType(data.type)

  return (
    <div className={styles.itemCard} style={{ borderLeft: `20px solid ${color}` }}>
      <div className={styles.content}>
        <p className={styles.cardName}>{data.name}</p>
        <p className={styles.cardDesc}>{data.desc.substr(0, 20)}</p>
      </div>
      <div className={styles.deadline} style={{ backgroundColor: color }}>Prazo: {data.deadline}</div>
      <div className={styles.icons}>
        <FaRegCommentDots size={16} />
        <p>
          {data.comments}
        </p>
        <GiPaperClip size={16} />
        <p>
          {data.indexed}
        </p>
        <FaTasks size={16} />
        <p>
          {data.tasks}
        </p>
      </div>
    </div>
  )
}
