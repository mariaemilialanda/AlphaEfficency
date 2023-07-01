import BookButton from "../BookButton/BookButton";
import styles from "./consultationInfo.module.css";
import image from "../../assets/Group 673.png";

function ConsultationInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.Title1}>Who Is The Consultation For?</h2>
        <p className={styles.text}>
          Chicago’s free medical check-up and weight loss consultation is for
          Chicago residents who are looking to lose weight so they can live a
          long, vibrant and healthy life, while looking good and not breaking
          the bank..
        </p>
        <h2 className={styles.Title2}>How Does It Work?</h2>
        <p className={styles.text}>
          In this exam a certified nurse or physician will do various tests to
          check your overall health level and find which easy-to-do
          physician-supervised weight loss program will work best for you.
        </p>
        <BookButton />
      </div>
      <div className={styles.image}>
        <img src={image} alt="Consultation" className={styles.im} />
      </div>
    </div>
  );
}

export default ConsultationInfo;
