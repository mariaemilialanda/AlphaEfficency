import React from 'react';
import styles from './contact.module.css';
import logo from '../../assets/Group 45.png'

function Contact() {
  return (
    <div className={styles.container}>
     <img src={logo} alt="Logo"  className={styles.logo} />
      <p>A Better Weigh Medical Weight Loss Center offers a weight loss program dedicated to helping you achieve long term weight loss success with the use of FDA approved medication.</p>
      <div className={styles.info}>
        <div className={styles.iconContainer}>
          <span className="material-icons">location_on</span>
        </div>
        <p>Head Office: 1931 W 95th Streeet Chicago IL, 60643</p>
      </div>
      <div className={styles.info}>
        <div className={styles.iconContainer}>
          <span className="material-icons">phone</span>
        </div>
        <p>Phone: 773-496-4222</p>
      </div>
      <div className={styles.socialMedia}>
        <div className={styles.iconContainer}>
          <span className="material-icons">facebook</span>
        </div>
        <div className={styles.iconContainer}>
          <span className="material-icons">instagram</span>
        </div>
        <div className={styles.iconContainer}>
          <span className="material-icons">twitter</span>
        </div>
      </div>
      <h3>About</h3>
      <ul>
        <li>About Us</li>
        <li>Locations</li>
        <li>Real Patient Stories</li>
        <li>Weight Loss Programs</li>
      </ul>
      <h3>More Links</h3>
      <ul>
        <li>Franchise Opportunities</li>
        <li>Career Opportunities</li>
        <li>Terms & Conditions</li>
        <li>Return Policy</li>
      </ul>
      <h5>Copyright by A Better Weigh Inc. All rights reserved.</h5>
    </div>
  );
}

export default Contact;
