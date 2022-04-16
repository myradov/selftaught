import React from 'react'
import Post from './Post'
import styles from '../styles/Home.module.css'

const Posts = () => {
  return (
    <ul className={styles.posts}>
        {
            Array(6).fill( <Post />)
        }
    </ul>
  )
}

export default Posts