"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GrTechnology } from 'react-icons/gr'
import styles from './header.module.css'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div >
                <Link href='/' className={styles.logo}>
                    Cloud
                    <GrTechnology />
                    Hosting

                </Link>
                <div className={styles.menu}>
                    {toggle ? <IoMdClose onClick={() => setToggle(prev => !prev)} /> : <FiMenu onClick={() => setToggle(prev => !prev)} />}
                </div>
            </div>
            <div className={styles.navLinksWrapper}
                style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || "" }} >
                <ul className={styles.navLinks}>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href='/' >Home</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href='/articles' >Articles</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href='/about' >About</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href='/admin' >Admin Dashboard</Link>
                </ul></div>
        </nav >
    )
}

export default Navbar
