import React from 'react'

import styles from './ServiceList.module.css'

export default function ServiceList(props) {

  const services = [
    "serviço 1",
    "serviço 2",
    "serviço 3",
    "serviço 4",
    "serviço 5",
    "serviço 6",
    "serviço 7",
    "serviço 8",
    "serviço 9",
    "serviço 10",
  ]

  return (
    <div className={styles.serviceList}>
      <p>Selecione a(s) categoria(s) de serviços que você e sua equipe irão realizar</p>
      <div className={styles.list}>
        {services.map((service, index) => <button key={index} className={styles.serviceBtn} onClick={() => console.log("click")} > {service}</button>)}
      </div>
      <button className={styles.mainBtn} onClick={props.changeSlide}>Prosseguir</button>
    </div >
  )
}
