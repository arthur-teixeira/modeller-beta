import React from 'react'

import { WelcomeModal as Modal } from '../../components'
import { Portal } from '../../components/utils'

import styles from './WelcomeModal.module.css'

export default function WelcomeModal() {
  return (
    <Portal>
      <div className={styles.page}>
        <Modal />
      </div>
    </Portal>
  )
}
