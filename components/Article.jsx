import React from 'react'
import Link from 'next/link'
import styles from './Aside.module.css'

const Article = () => {
  return (
    <article className={styles.article}>
        <Link href="/">
            <a>Upgrading Next.js for instant performance tes test test</a>
        </Link>
    </article>
  )
}

export default Article