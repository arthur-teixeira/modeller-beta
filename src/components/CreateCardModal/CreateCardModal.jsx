import React from 'react'

import styles from './CreateCardModal.module.css'

import { ModalActivity } from '../utils'

export default function CreateCardModal() {
  return (
    <div className={styles.modal}>
      <header className={styles.modalHeader}>
        <h2>Detalhes do card:</h2>
        <h1 className={styles.modalName}>Nome do Card</h1>
        <p className={styles.creationDate}>(Criado em 01/05/2020- na Lista Etapa 01)</p>
      </header>
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
