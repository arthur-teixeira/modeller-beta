import React from 'react'

import styles from './Sidenav.module.css'

import Avatar from '../../assets/avatar.png'

import { Button } from '../utils'

export default function Sidenav() {
  return (
    <div className={styles.sidenavParent}>
      <nav className={styles.sidenav}>
        <img src={Avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.content}>
          <p className={styles.username}>Joao</p>
          <p className={styles.companyName}>Empresa</p>
        </div>
        <div className={styles.buttons}>
          <Button>Meus pipes</Button>
          <Button>Novidades</Button>
          <Button>Membros</Button>
          <Button>Conexões</Button>
          <Button>Minhas tarefas</Button>
          <p href="/" className={styles.switchCompany}>Alterar empresa</p>
        </div>
      </nav>
    </div>
  )
}
