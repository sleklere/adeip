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
      <main className={styles["main-biblioteca"]}>
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
          {/* <div className={styles.imgBibliotecaria}></div> */}
          <p>
            <strong>Nombre y Apellido:</strong> Miriam Testero
          </p>
          {/* <p>
            <strong>Apellido:</strong> Testero
          </p> */}
          <p>
            <strong>Teléfono:</strong> 1168813594
          </p>
          <p>
            <strong>Email:</strong> miriamtestero@hotmail.com
          </p>
        </div>
      </main>
    </div>
  );
}

export default Biblioteca;
