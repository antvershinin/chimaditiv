import React from 'react'
import styles from './PigmentCard.module.css'
import { IPigment } from '../../assets/catalogues/standart'

interface ICard {
  pigment : IPigment
}

export const PigmentCard  = (props:ICard) => {
  const {image,name,size,smyk} = props.pigment
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image}/>
      </div>
      <div className={styles.descWrapper}>
        <span style={{fontWeight:'bold'}}>{name}</span>
        <span>{size} мкм</span>
        <span>SMYK: {smyk}</span>
      </div>
    </div>
  )
}
