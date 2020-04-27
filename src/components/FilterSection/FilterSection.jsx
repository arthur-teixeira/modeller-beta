import React from 'react'

import styles from './FilterSection.module.css'

import { FiFilter, FiSearch } from 'react-icons/fi'

export default function FilterSection() {
  return (
    <div className={styles.filterWrapper}>
      <section className={styles.filterSection}>
        <FiFilter size={24} />
        <p>Filtros:</p>
        <div className={styles.placeholderFilled}></div>
        <div className={styles.placeholder}></div>
        <div className={styles.placeholder}></div>
        <div className={styles.searchBarWrapper}>
          <input type="text" className={styles.searchBar} />
          <FiSearch size={24} />
        </div>
      </section>
      <section className={styles.tagSection}>
        <p>Etiquetas:</p>
        <div className={styles.tagButtons}>
          <button className={styles.redTagButton}>Alta Prioridade</button>
          <button className={styles.yellowTagButton}>Média Prioridade</button>
          <button className={styles.blueTagButton}>Baixa prioridade</button>
        </div>
      </section>
    </div>
  )
}
