import React, { useState } from "react";
import styles from "./navBar.module.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
        onClick={handleHamburgerMenuClick}
      >
       <div className={styles.hamburgerIcon}>☰</div> 
      </div>
      <ul className={`${styles.list} ${isMenuOpen ? styles.open : ""}`}>
        <a href="">
          <li className={styles.li}>About Us</li>
        </a>
        <a href="">
          <li className={styles.li}>Book Online</li>
        </a>
        <a href="">
          <li className={styles.li}>Weight Loss Programs</li>
        </a>
        <a href="">
          <li className={styles.li}>Real Patient Stories</li>
        </a>
        <a href="">
          <li className={styles.li}>Locations</li>
        </a>
        <a href="">
          <li className={styles.li}>Blog</li>
        </a>
        <a href="">
          <li className={styles.li}>Shop</li>
        </a>
        <a href="">
          <li className={styles.li}>Subscription</li>
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
