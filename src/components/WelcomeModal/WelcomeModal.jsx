import React, { useState } from 'react'

import styles from './WelcomeModal.module.css'

import { Heading } from '../utils'

import ServiceList from './ServiceList/ServiceList'
import ProfileAvatar from './ProfileAvatar/ProfileAvatar'

export default function WelcomeModal() {

  const [slide, setSlide] = useState(0);
  return (
    <div className={styles.modal}>
      <Heading>Seja bem-vindo!</Heading>
      {slide === 0 ? <ServiceList changeSlide={() => setSlide(1)} /> : <ProfileAvatar />}
    </div>
  )
}
