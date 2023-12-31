import React, { useState } from 'react';
import BookButton from '../BookButton/BookButton';
import styles from './faq.module.css'
import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(0)}>
          Why is it free?
         { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 0 && (
          <p className={styles.content}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(1)}>
          Do I need this if I’ve had my yearly medical check? What is the difference?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 1 && (
          <p className={styles.content}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(2)}>
          Can I bring another person to the appointment?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 2 && (
          <p className={styles.content}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(3)}>
          How long does it take?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 3 && (
          <p className={styles.content}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(4)}>
          What if I have to cancel or if I’m not sure I’ll be able to make it?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 4 && (
          <p className={styles.content}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(5)}>
          Do I need to bring anything with me?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 5 && (
          <p className={styles.content}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(6)}>
          What if I don’t have insurance?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 6 && (
          <p className={styles.content}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(7)}>
          Do the weight loss programs you offer work?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 7 && (
          <p className={styles.content}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(8)}>
          What's the catch?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 8 && (
          <p className={styles.content}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(9)}>
          Will I have to exhaust myself in the gym to make it work?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 9 && (
          <p className={styles.content}>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
        <div className={styles.QA}>
        <h4 className={styles.title} onClick={() => toggleAccordion(10)}>
          Where are you located?
          { activeIndex === 0 ? <RiArrowUpSLine className={styles.arrowUp}/> : <RiArrowDownSLine className={styles.arrowDown}/>}
        </h4>
        {activeIndex === 10 && (
          <p className={styles.content}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ipsam sequi numquam nihil, quis pariatur! Dolore cupiditate aliquid ea recusandae dicta! Atque sunt est ullam quisquam distinctio hic vel quae?
          </p>
        )}
        </div>
      </div>
       <div className={styles.BookBtn}>
      <button className={styles.BookButton}>Book my appointment</button>
      </div>
    </div>
  );
}

export default FAQ;
