"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "@/app/styles/navbar.module.css"
// import descriptionimage  from '../public/images/description_img.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <Link href="/" >

        <img
        src={"/images/logo.svg"}
        width={60}
        height={50}
        alt="NXG Logor"
        style={{objectFit: "contain", verticalAlign:"middle"}}
        loading="lazy"
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 50vw, 33vw"
      />
          NXG Solutions
        </Link>
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.hamburger}></div>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/services" legacyBehavior>
            <a>Service</a>
          </Link>
        </li>
        <li>
          <button className={styles.button}>Contact Now</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
