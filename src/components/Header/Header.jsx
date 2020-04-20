import React from 'react'

import styles from './Header.module.css'

import { FiMenu, FiSearch, FiBell, FiPlus } from 'react-icons/fi'

import Logo from '../../assets/logo_02.png'

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.leftSide}>
          <FiMenu size={24} color="#DAE1EA" />
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.searchBox} placeholder="Pesquisar" />
            <FiSearch size={24} color="#365DA8" className={styles.searchIcon} />
          </div>
          <div className={styles.notifications}>
            <FiBell size={24} color="#365DA8" />
          </div>
          <div className={styles.invite}>
            <FiPlus size={24} color="#365DA8" />
            Convidar
          </div>
        </div>
      </header>
    </div>
  )
}
