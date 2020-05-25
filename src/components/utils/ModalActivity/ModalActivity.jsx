import React from 'react'

import styles from './ModalActivity.module.css'

import avatar from '../../../assets/avatar.png'

export default function ModalActivity() {
  return (
    <div className={styles.modalActivity}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <div>
        <p className={styles.activityDescription}>
          <span className={styles.name}>João da Silva</span> adicionou este card à lista etapa 01
      </p>
        <small className={styles.small}>3 minutos atrás</small>
      </div>
    </div>
  )
}
