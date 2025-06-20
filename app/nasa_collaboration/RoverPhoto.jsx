import styles from "./page.module.css";


export default function RoverPhoto({ src, date, roverName }) {
  return (
    <>
    <h3>{roverName}</h3>
      <p>Date {date}</p>
      <img
        className={styles.nasaPicOfTheDayImg}
        src={src}
        alt={roverName}
      />
    </>
  );
}
