import React, { useContext } from 'react'

import styles from './PipeStage.module.css'

import { FiMoreVertical, FiPlusCircle } from 'react-icons/fi'

import { ItemCard, Toggle, Portal } from '../utils'

import { PipeContext } from '../'

import { CreateCard } from '../../Pages'

export default function PipeStage() {

  const placeholderData = [
    {
      name: "card name",
      desc: "card description",
      deadline: "22/12",
      comments: 10,
      indexed: 18,
      tasks: "7/14",
      type: "low",
      key: 1
    },
    {
      name: "card name",
      desc: "card description",
      deadline: "22/12",
      comments: 20,
      indexed: 14,
      tasks: "7/14",
      type: "medium",
      key: 2
    },
    {
      name: "card name",
      desc: "card description",
      deadline: "22/12",
      comments: 10,
      indexed: 14,
      tasks: "7/14",
      type: "high",
      key: 3
    },
    {
      name: "card name",
      desc: "card description",
      deadline: "22/12",
      comments: 10,
      indexed: 14,
      tasks: "7/14",
      type: "medium",
      key: 4
    },
  ]

  const filter = useContext(PipeContext)[0]


  let filteredData = placeholderData.filter(card => {
    if (filter) return card.type === filter
    else return card
  })


  return (
    <div className={styles.pipeStage}>
      <div className={styles.stageHeader}>
        <h1 className={styles.stageName}>Etapa 01</h1>
        <h3 className={styles.cardAmount}>03 cards</h3>
        <div className={styles.icons}>
          <FiMoreVertical />
        </div>
      </div>
      <div className={styles.pipes}>
        {filteredData.map(item => (
          <ItemCard key={item.key} data={item} />
        ))}
      </div>
      <Toggle render={({ on, toggle }) => (
        <>
          {on && <Portal><CreateCard toggleHandler={toggle} on={on} /></Portal>}
          <div className={styles.newTask} onClick={toggle}>
            <FiPlusCircle />
            <p>Nova tarefa</p>
          </div>
        </>
      )} />
    </div>
  )
}
