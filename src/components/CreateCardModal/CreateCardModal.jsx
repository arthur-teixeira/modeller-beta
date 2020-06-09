import React from 'react'

import styles from './CreateCardModal.module.css'

import { ModalActivity } from '../utils'

import { FiPlus } from 'react-icons/fi'

export default function CreateCardModal() {
  return (
    <div className={styles.modal}>
      <header className={styles.modalHeader}>
        <h2>Detalhes do card:</h2>
        <h1 className={styles.modalName}>Nome do Card</h1>
        <p className={styles.creationDate}>(Criado em 01/05/2020- na Lista Etapa 01)</p>
      </header>
      <section className={styles.admin}>
        <h2>Responsável:</h2>
        <div className={styles.addAdmin}>
          <div><FiPlus color="#FFF" size={12} /></div>
          <p>Adicionar</p>
        </div>
      </section>
      <section className={styles.modalDescription}>
        <h2>Descrição:</h2>
        <textarea className={styles.descriptionArea}></textarea>
      </section>
      <h2>Atividades:</h2>
      <section className={styles.modalActivities}>
        <ModalActivity />
      </section>
    </div>
  )
}
