import React from 'react'

import { PipeStage, FilterSection, Header } from '../../components/'
import styles from './Pipe.module.css'

export default function Pipe() {
  return (
    <>
      <Header />
      <FilterSection />
      <div className={styles.pipe}>
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
        <PipeStage />
      </div>
    </>
  )
}
