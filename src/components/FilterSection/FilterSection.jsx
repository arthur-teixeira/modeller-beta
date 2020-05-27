import React, { useContext } from 'react'

import styles from './FilterSection.module.css'

import { FiFilter, FiSearch } from 'react-icons/fi'

import { PipeContext } from '../'

export default function FilterSection() {

  const [filter, setActiveFilter] = useContext(PipeContext)

  const setFilterHandler = (filterValue) => {
    if (filter === filterValue) return setActiveFilter("")
    else return setActiveFilter(filterValue)
  }

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
          <button className={styles.redTagButton} customType="high" onClick={() => setFilterHandler("high")}>Alta Prioridade</button>
          <button className={styles.yellowTagButton} customType="medium" onClick={() => setFilterHandler("medium")}>Média Prioridade</button>
          <button className={styles.blueTagButton} customType="low" onClick={() => setFilterHandler("low")} >Baixa prioridade</button>
        </div>
      </section>
    </div>
  )
}
