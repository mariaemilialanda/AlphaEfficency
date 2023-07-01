import React from 'react';
import styles from './contact.module.css';
import logo from '../../assets/Group 45.png';
import { FiMapPin } from 'react-icons/fi';
import { FaPhone, FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.block3}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.text}>
          <p>A Better Weigh Medical Weight Loss Center offers a weight loss program dedicated to helping you achieve long term weight loss success with the use of FDA approved medication.</p>
        </div>
        <div className={styles.info}>
          <p><FiMapPin className={styles.pinpoint} /><strong>Head Office: </strong>1931 W 95th Streeet Chicago IL, 60643</p>
        </div>
        <div className={styles.info}>
          <p><FaPhone className={styles.phone} /><strong>Phone: </strong>773-496-4222</p>
        </div>
        <div className={styles.socialMedia}>
          <span className={styles.FaFacebookSquare}><FaFacebookSquare /></span>
          <span className={styles.instagram}><FaInstagram /></span>
          <span className={styles.twitter}><FaTwitterSquare /></span>
        </div>
      </div>
      <div className={styles.block4}>
        <div className={styles.listBlocks}>
          <div>
            <h3 className={styles.listTitles}>About</h3>
            <ul className={styles.list}>
              <li className={styles.item}><a href="/about">About Us</a></li>
              <li className={styles.item}><a href="/locations">Locations</a></li>
              <li className={styles.item}><a href="/stories">Real Patient Stories</a></li>
              <li className={styles.item}><a href="/programs">Weight Loss Programs</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.listTitles}>More Links</h3>
            <ul className={styles.list}>
              <li className={styles.item}><a href="/franchise">Franchise Opportunities</a></li>
              <li className={styles.item}><a href="/careers">Career Opportunities</a></li>
              <li className={styles.item}><a href="/terms">Terms & Conditions</a></li>
              <li className={styles.item}><a href="/returns">Return Policy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footer}>
        <h5 className={styles.footer}>Copyright by A Better Weigh Inc. All rights reserved.</h5>
        </div>
      </div>
    </div>
  );
}

export default Contact;
