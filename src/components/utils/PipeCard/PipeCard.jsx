import React, { useState } from 'react'

import styles from './PipeCard.module.css'

import { FiMoreVertical } from 'react-icons/fi'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'

export default function PipeCard() {

  const [isStarFilled, setStarFill] = useState(false)

  const HandleStarFill = () => isStarFilled ? setStarFill(false) : setStarFill(true)


  return (
    <div className={styles.pipeCard}>
      <FiMoreVertical size={16} className={styles.more} />
      {
        isStarFilled ?
          <IoIosStar onClick={HandleStarFill} size={16} className={styles.star} /> :
          <IoIosStarOutline onClick={HandleStarFill} size={16} className={styles.star} />
      }
      <div className={styles.icon}>
        <p>Ícone</p>
      </div>
      <div className={styles.cardContent}>
        <p className={styles.projectName}>Projeto 01</p>
        <p className={styles.cardAmount}>{38} cards</p>
      </div>
    </div>
  )
}
