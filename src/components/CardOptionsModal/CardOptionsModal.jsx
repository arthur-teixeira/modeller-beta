import React from 'react'

import styles from './CardOptionsModal.module.css'

import { Button } from '../utils'

const CustomButton = ({ children }) => {
  return <Button customStyles={{ width: "100%", margin: "0.5rem auto", fontWeight: "bold" }}>{children}</Button>
}

export default function CardOptionsModal() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <header className={styles.modalHeader}>
          <h2>Lista:</h2>
          <h1>Etapa 01</h1>
        </header>
        <section className={styles.addToCard}>
          <h2>Adicionar ao card:</h2>
          <CustomButton>Anexo</CustomButton>
          <CustomButton>Data de entrega</CustomButton>
          <CustomButton>Responsável</CustomButton>
          <CustomButton>Capa</CustomButton>
          <CustomButton>Etiquetas</CustomButton>
          <CustomButton>Membros</CustomButton>
          <CustomButton>Checklist</CustomButton>
        </section>

        <section className={styles.actions}>
          <h2>Ações:</h2>
          <CustomButton>Mover</CustomButton>
          <CustomButton>Duplicar</CustomButton>
          <CustomButton>Criar modelo</CustomButton>
          <CustomButton>Deletar</CustomButton>
          <CustomButton>Compartilhar</CustomButton>
        </section>
      </div>
    </div>
  )
}
