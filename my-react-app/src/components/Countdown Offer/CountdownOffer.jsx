import React, { useEffect, useState } from 'react';
import styles from './countdown.module.css';

function CountdownOffer() {
  const [countdown, setCountdown] = useState({
    days: 1,
    hours: 15,
    minutes: 40,
    seconds: 30
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        let { days, hours, minutes, seconds } = prevCountdown;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days -= 1;
                hours = 23;
                minutes = 59;
                seconds = 59;
              } else {
                clearInterval(interval);
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.countdownOffer}>
      <h2 className={styles.mainTitle}>Your offer ends in:</h2>
      <div className={styles.countdownTimer}>
        <div className={styles.countdownItem}>
          <h3 className={styles.countdownLabel}>DAYS</h3>
          <h3 className={styles.countdownLabel}>HOURS</h3>
          <h3 className={styles.countdownLabel}>MINUTES</h3>
          <h3 className={styles.countdownLabel}>SECONDS</h3>
        </div>
        <div className={styles.countdownNumbers}>
          <span className={styles.countdownValue}>{countdown.days}</span>
          <span className={styles.countdownValue}>{countdown.hours}</span>
          <span className={styles.countdownValue}>{countdown.minutes}</span>
          <span className={styles.countdownValue}>{countdown.seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownOffer;