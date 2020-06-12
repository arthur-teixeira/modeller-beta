import React from 'react'

import styles from './Sidenav.module.css'

import Avatar from '../../assets/avatar.png'

import { RiEditBoxLine, RiStackLine, RiNewspaperLine } from 'react-icons/ri'
import { BsPeople } from 'react-icons/bs'
import { IoMdShare } from 'react-icons/io'
import { FiClipboard } from 'react-icons/fi'

import { Button } from '../utils'

export default function Sidenav() {
  return (
    <div className={styles.sidenavParent}>
      <RiEditBoxLine className={styles.editIcon} size={24} color="#808080" />
      <nav className={styles.sidenav}>
        <img src={Avatar} alt="avatar" className={styles.avatar} />
        <div className={styles.content}>
          <h1 className={styles.username}>João da Silva</h1>
          <p className={styles.companyName}>Nome da Empresa</p>
        </div>
        <div className={styles.buttons}>
          <Button><RiStackLine size={24} /> Meus pipes</Button>
          <Button><RiNewspaperLine size={24} /> Novidades</Button>
          <Button><BsPeople size={24} /> Membros</Button>
          <Button><IoMdShare size={24} />Conexões</Button>
          <Button><FiClipboard size={24} /> Minhas tarefas</Button>
          <p href="/" className={styles.switchCompany}>Alterar empresa</p>
        </div>
      </nav>
    </div>
  )
}
