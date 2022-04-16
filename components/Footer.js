import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logo}>
            <Link href='/'>
                <a>
                    <Image src='/vercel-light.svg' width={100} height={50}/>
                </a>
            </Link>
        </div>
        <ul className={styles.menu}>
            <li className={styles.menuList}>
                <Link href='/'>
                    <a>
                        Contact us
                    </a>
                </Link>
            </li>
            <li className={styles.menuList}>
                <Link href='/'>
                    <a>
                        Post a blog
                    </a>
                </Link>
            </li>
        </ul>
        <div className={styles.rights}>
            <code>All rights reserved</code>
        </div>
    </footer>  
    
  )
}

export default Footer