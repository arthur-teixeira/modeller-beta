import React, { useContext, useState } from 'react'

import Switch from 'react-switch'

import styles from './FilterSection.module.css'

import { FiFilter, FiSearch } from 'react-icons/fi'
import { AiFillTag, AiFillWarning } from 'react-icons/ai'
import { TiGroup } from 'react-icons/ti'

import { PipeContext } from '../'

export default function FilterSection() {

  const [filters, setActiveFilter] = useContext(PipeContext)

  const [checked, setChecked] = useState(false)

  const setFilterHandler = (value, filterArray) => {
    const filterArrayCopy = [...filterArray]
    if (filterArrayCopy.includes(value)) {
      filterArrayCopy.splice(filterArrayCopy.indexOf(value), 1)
      setActiveFilter(filterArrayCopy)
    }
    else {
      setActiveFilter([...filterArrayCopy, value])
    }
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className={styles.filterWrapper}>
      <section className={styles.filterSection}>
        <FiFilter size={24} />
        <p>Filtros</p>
        <div className={styles.filterIcons}>
          <div>
            <AiFillTag size={24} />
            Etiquetas
          </div>
          <div>
            <TiGroup size={24} />
            Membros
          </div>
          <div>
            <AiFillWarning size={24} />
            Status
          </div>
        </div>
        <div className={styles.searchBarWrapper}>
          <input type="text" className={styles.searchBar} />
          <FiSearch size={24} />
        </div>
        <div className={styles.filterSwitch}>
          {checked ? (
            <p className={styles.filterOn}>
              Filtros ligados
            </p>
          ) : (
              <p className={styles.filterOff}>
                Filtros desligados
              </p>
            )}
          <Switch
            onChange={handleChange}
            checked={checked}
            offColor="#D3D3D3"
            onColor="#D3D3D3"
            onHandleColor="#1E3560"
            offHandleColor="#808080"
            checkedIcon={false}
            uncheckedIcon={false}
            className={styles.switch}
          />
        </div>
      </section>
      <section className={styles.tagSection}>
        <div className={styles.tagButtons}>
          <button className={styles.redTagButton} customType="high" onClick={() => setFilterHandler("high", filters)}>Alta Prioridade</button>
          <button className={styles.yellowTagButton} customType="medium" onClick={() => setFilterHandler("medium", filters)}>Média Prioridade</button>
          <button className={styles.blueTagButton} customType="low" onClick={() => setFilterHandler("low", filters)} >Baixa prioridade</button>
        </div>
      </section>
    </div>
  )
}
