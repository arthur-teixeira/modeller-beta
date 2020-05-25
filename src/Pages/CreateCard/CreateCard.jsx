import React from 'react'

import { animated, useSpring } from 'react-spring'

import { CreateCardModal, CardOptionsModal } from '../../components'

import styles from './CreateCard.module.css'


export default function CreateCard(props) {
  const backgroundAnimation = useSpring({ opacity: 0.7, from: { opacity: 0.1 } })
  const modalAnimation = useSpring({
    from: {
      marginTop: '-50px'
    },
    to: {
      marginTop: '50px'
    }
  })
  return (
    <div className={styles.createCard}>
      <animated.div style={backgroundAnimation} className={styles.background} onClick={props.toggleHandler}></animated.div>
      <animated.div style={modalAnimation} className={styles.modals}>
        <CreateCardModal />
        <CardOptionsModal />
      </animated.div>
    </div>
  )
}
