import PageLayoutTop from "../Components/PageLayoutTop";
// import backgroundImage from "../Assets/biblioteca.jpg";
// import backgroundImage from "../Assets/publicaciones-2.jpg";
// import backgroundImage from "../Assets/home-2.avif";

import Book from "../Components/Book";
import styles from "./Biblioteca.module.css";

function Biblioteca() {
  return (
    <div className={styles.container}>
      <PageLayoutTop
        title={"BIBLIOTECA"}
        // image={backgroundImage}
      />
      <main>
        <h2 className={styles["heading-secondary-biblioteca"]}>
          Catálogo de libros
        </h2>
        <Book />
        <Book />
        <Book />
        <Book />
        <h2
          className={`${styles["bibliotecaria-title"]}, ${styles["heading-secondary-biblioteca"]}`}
        >
          Bibliotecaria
        </h2>
        <div className={styles.bibliotecaria}>
          <div className={styles.imgBibliotecaria}></div>
          <p>Nombre:</p>
          <p>Apellido:</p>
          <p>Teléfono:</p>
          <p>Email:</p>
        </div>
      </main>
    </div>
  );
}

export default Biblioteca;
