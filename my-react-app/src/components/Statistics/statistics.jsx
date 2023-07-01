import React from 'react';
import styles from './statistics.module.css';
import frame72 from '../../assets/Frame 72.png'
import frame75 from '../../assets/Frame 75.png'
import frame77 from '../../assets/Frame 77.png'
import frame79 from '../../assets/Frame 79.png'
import BookButton from "../BookButton/BookButton"

function Statistics() {
  return (
    <> 
      <div className={styles.all}>
            <div className={styles.container}>
              <div className={styles.stat}>
                <img src={frame72} alt="years in business" />
              </div>
              <div className={styles.stat}>
                <img src={frame75} alt="positive reviews" />
              </div>
              <div className={styles.stat}>
                <img src={frame77} alt="satisfied clients" />
              </div>
              <div className={styles.stat}>
                <img src={frame79} alt="number of nurces and physicians" />
              </div>
            </div>
            <button className={styles.BookButton}>Book my appointment</button>
        </div>   
    </> 
  );
}

export default Statistics;
