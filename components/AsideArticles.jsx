import React from 'react'
import styles from './Aside.module.css'
import Link from 'next/link'
import Article from './Article'

const AsideArticles = () => {
  return (
    <aside className={styles.aside}>
        <h2 className={styles.aside_title}>Trending</h2>
        {
          Array(6).fill(<Article />)
        }
    </aside>
  )
}

export default AsideArticles