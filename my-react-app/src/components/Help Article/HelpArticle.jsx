import React from 'react';
import BookButton from '../BookButton/BookButton';
import styles from './helpArticle.module.css';
import image from '../../assets/Mask Group.png';

function HelpArticle() {
  return (
    <div className={styles.containerH}>
      <div>
      <h2 className={styles.title}>We Can Help You</h2>
      <div className={styles.textDiv}>
                  <p   className={styles.txt}>For those of us who struggle with our weight
            it’s easy to lose hope. We have seen so many tricks, gimmicks and weight loss programs that simply do not work for us.
            They want us to eat like a pigeon, avoid all the things we love to eat and work out till we cry. We are here to tell you that it doesn’t have to be that way. There is hope! Technology has advanced rapidly in recent years and now, with proper guidance... </p>
            <p className={styles.txt}>You can join the ranks of our over 15,000 satisfied clients who have lost weight, regained their confidence and are living happy exuberant lives with their family. They did this without: breaking the bank, sweating buckets in intense workout programs, and most importantly, without giving up ice-cream, bread, pizza, doughnuts and all their favorite foods.</p>
      </div>
      <button className={styles.BookButton}>Book my appointment</button>
      </div>
      <div>
      <img src={image} className={styles.imag} alt="people" />
      </div>
    </div>
  );
}

export default HelpArticle;
