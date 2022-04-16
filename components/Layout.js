import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from '../styles/Home.module.css'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout