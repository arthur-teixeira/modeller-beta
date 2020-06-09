import React from 'react'

import styles from './Header.module.css'

import { FaUserPlus, FaRegBell } from 'react-icons/fa'
import { AiOutlineHistory } from 'react-icons/ai'

import Icon from '../../assets/FAVICON.png'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <div className={styles.logoContainer}>
            <img src={Icon} alt="logo" className={styles.logo} />
            <p>Home</p>
          </div>
          <h1 className={styles.projectName}>Nome do projeto</h1>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.invite}>
            <FaUserPlus size={16} />
            <p>Novo membro</p>
          </div>
          <div className={styles.notifications}>
            <FaRegBell />
          </div>
          <div className={styles.history}>
            <AiOutlineHistory />
          </div>
        </div>
      </header>
    </div>
  )
}
