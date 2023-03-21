import styles from "./Book.module.css";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Book() {
  return (
    <div className={styles.librosContainer}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faBook} className={styles.iconLibro} />
      </div>
      <div className={styles.librosInfoContainer}>
        <h3>Nombre</h3>
        <p>Autor:</p>
        <p>Editorial:</p>
      </div>
    </div>
  );
}

export default Book;
