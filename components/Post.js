import React from 'react'
import Link from 'next/link'
import styles from './Post.module.css'
import Button from './Button'

const Post = () => {
  return (
    <li className={styles.article}>
        <span className={styles.date}>Thursday, March 17th 2022</span>
        <Link href='/'>
            <a>
                <h2 className={styles.title}>Upgrading Next.js for instant performance improvements</h2>
            </a>
        </Link>
        <div className={styles.description}>
            <p> Since the release of Next.js, we’ve worked to introduce new features and tools that drastically improve application performance, 
            as well as overall developer experience. Let’s take a look at what a difference upgrading to the latest version of Next.js can make.
            </p>
        </div>
        <Button title="Read more" type="primary"/>
    </li>
  )
}

export default Post