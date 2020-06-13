import React from 'react'

import styles from './Header.module.css'

import { FiMenu, FiSearch } from 'react-icons/fi'

import { FaUserPlus, FaRegBell } from 'react-icons/fa'

import logo from '../../../assets/logo_02.png'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <FiMenu size={36} />
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.center}>
          <div className={styles.inputContainer}>
            <input type="text" className={styles.input} />
            <FiSearch className={styles.inputIcon} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.notifications}>
            <FaRegBell />
          </div>
          <div className={styles.invite}>
            <FaUserPlus size={16} />
            <p>Novo membro</p>
          </div>
        </div>
      </div>
    </div>
  )
}
