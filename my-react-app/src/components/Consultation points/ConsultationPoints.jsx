import React from 'react';
import BookButton from '../BookButton/BookButton';
import styles from './consultationPoints.module.css';

function ConsultationPoints() {
  return (
    <div className={styles.container}>
      <h2  className={styles.title}>What You’ll Get At Your  <span className={styles.highlight}>Free</span>  Consultations</h2>
      <div className={styles.blocks}>
             <div className={styles.block1} >
                  <h3 className={styles.blueTitle}>Body Mass Index</h3>
                  <div className={styles.data}>
                  <ul className={styles.data}>
                    <li>Complete understanding of your body composition</li>
                    <li>A clear view of your weight loss goals</li>
                    <li>Clear data to help you make an informed decision about your health</li>
                  </ul>
                  </div>
              </div>
              <div className={styles.block2}>
                    <h3 className={styles.pinkTitle}>Vital Signs Check</h3>
                    <div  className={styles.data}>
                    <ul className={styles.data}>
                      <li>Body temperature</li>
                      <li>Pulse rate, heart's rate, rhythm and regularity</li>
                      <li>Breathing rate</li>
                      <li>Blood pressure</li>
                  </ul>
                  </div>
              </div>
      </div>
      <div className={styles.btn}>
      <button className={styles.BookButton}>Book my appointment</button>
      </div>
    </div>
  );
}

export default ConsultationPoints;
