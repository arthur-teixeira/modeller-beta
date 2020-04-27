import React from 'react'

import { PipeStage, FilterSection } from '../../components/'
import styles from './Pipe.module.css'

export default function Pipe() {
  return (
    <>
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
