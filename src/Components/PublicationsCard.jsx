import styles from "./PublicationsCard.module.css";

function Card(props) {
  return (
    <a
      href={props.pdf}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles["card-img--div"]}>
        <img src={props.cardImg} alt="card background" />
      </div>
      <div className={styles.div}>
        <h3>{props.title}</h3>
        <button>Leer más</button>
      </div>
    </a>
  );
}

export default Card;
