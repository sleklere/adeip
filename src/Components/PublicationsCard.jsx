import styles from "./PublicationsCard.module.css";
import cardImage from "../Assets/publicaciones-card.jpg";

function Card() {
  return (
    <div className={styles.card}>
      <img src={cardImage} alt="card background" />
      <div className={styles.div}>
        <h3>PSICODIAGNOSTICAR 29</h3>
        <button>Leer más</button>
      </div>
    </div>
  );
}

export default Card;
