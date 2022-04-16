import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/vercel-light.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <Link href='/'>
                <a>
                    <Image src={logo} width={100} height={50}/>
                </a>
            </Link>
        </div>
        <ul className={styles.menu}>
            <li className={styles.menu_item}>
                <Link href='/'>
                    <a>Latest</a>
                </Link>
            </li>
            <li className={styles.menu_item}>
                <Link href='/'>
                    <a>Popular</a>
                </Link>
            </li>
            <li className={styles.menu_item}>
                <Link href='/'>
                    <a>Categories</a>
                </Link>
            </li>
            <li className={styles.menu_item}>
                <Link href='/'>
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
        <div className={styles.ld}>
            <Link href='/'>
                <a>
                    <Image src={logo} width={100} height={50}/>
                </a>
            </Link>
        </div>
    </nav>  
    
  )
}

export default Navbar