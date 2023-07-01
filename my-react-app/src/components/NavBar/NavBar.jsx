import React from 'react';
import styles from './navBar.module.css'

function NavBar() {
  return (
    <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li className={styles.li}>
              About Us
            </li>
            <li  className={styles.li}>
            Book Online
            </li>
            <li  className={styles.li}>
            Weight Loss Programs
            </li>
            <li  className={styles.li}>
            Real Patient Stories
            </li>
            <li  className={styles.li}>
            Locations
            </li>
            <li  className={styles.li}>
            Blog
            </li>
            <li  className={styles.li}>
            Shop
            </li>
            <li  className={styles.li}>
            Subscription
            </li>

          </ul>
    </div>
  );
}

export default NavBar;
