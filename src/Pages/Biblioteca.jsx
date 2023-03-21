import Book from "../Components/Book";

import styles from "./Biblioteca.module.css";

function Biblioteca() {
  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h1>BIBLIOTECA</h1>
      </div>
      <main>
        <h2>Catálogo de libros</h2>
        <Book />
        <Book />
        <Book />
        <Book />
        <h2 className={styles.tituloBibliotecaria}>Bibliotecaria</h2>
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
