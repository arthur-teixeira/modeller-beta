import React, { useState } from 'react'

import styles from './ProfileAvatar.module.css'

import avatar from '../../../assets/avatar.png'

import { MdAddAPhoto } from 'react-icons/md'

export default function ProfileAvatar() {

  const [file, setFile] = useState(null);

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className={styles.profileAvatar}>
      <p>Escolha um AVATAR para seu perfil, ou adicione uma foto</p>
      {file ? <img src={file} alt="preview" className={styles.avatarPreview} /> : <img src={avatar} alt="preview" className={styles.avatarPreview} />}
      <div className={styles.inputContainer}>
        <input type="file" className={styles.fileInput} onChange={handleChange} id="file" />
        <label htmlFor="file"><MdAddAPhoto /> Adicionar foto</label>
      </div>
      <button className={styles.mainBtn}>Concluir ></button>
    </div>
  )
}
