
import logo from '../../assets/Group 45.png'
import NavBar from '../NavBar/NavBar'
import CountdownOffer from '../Countdown Offer/CountdownOffer';
import BookButton from '../BookButton/BookButton';
import styles from './landingPage.module.css';


function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <NavBar />
      </div>
      <div className={styles.titleCountdown}>
      <h1 className={styles.mainTitle}>Chicago’s <span>Free</span> Medical Check-Up and Weight Loss Consultation</h1>
      <CountdownOffer />
      </div>
      <p className={styles.underText}>Limited spots available due to the Physicians schedule and the high demand for service. No credit card or insurance required.</p>
      <BookButton />
    </div>
  );
}

export default LandingPage;
