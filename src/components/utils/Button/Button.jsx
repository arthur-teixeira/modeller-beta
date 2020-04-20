import React from 'react'

import styles from './Button.module.css'

export default function Button({ type, clickHandler, children }) {
  return (
    <button type={type || "button"} onClick={clickHandler || null} className={styles.btn}>
      {children}
    </button>
  )
}
