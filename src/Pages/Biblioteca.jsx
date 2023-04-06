import PageLayoutTop from "../Components/PageLayoutTop";
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
        <p className={styles["biblioteca-p-catalogo"]}>
          Accedé a nuestro catálogo de libros a través del siguiente link
        </p>
        <a
          href="http://abcdonline.com.ar/adeip"
          target="_blank"
          rel="noreferrer"
          className={styles["biblioteca-link-catalogo"]}
        >
          http://abcdonline.com.ar/adeip
        </a>

        <h2
          className={`${styles["bibliotecaria-title"]}, ${styles["heading-secondary-biblioteca"]}`}
        >
          Bibliotecaria
        </h2>
        <div className={styles.bibliotecaria}>
          <p>
            <strong>Nombre y Apellido:</strong> Miriam Testero
          </p>
          <p>
            <strong>Teléfono:</strong> +54 9 341 354-2535
          </p>
          <p>
            <strong>Email:</strong> miriamtestero@gmail.com
          </p>
        </div>
      </main>
    </div>
  );
}

export default Biblioteca;
