import React,{useState} from 'react'
import styles from './Button.module.css'

const Button = ({title, color}) => {
  return (
    <button className={styles.btn} style={{color}}>{title}</button>
  )
}

export default Button