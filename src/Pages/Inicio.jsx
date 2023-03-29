import styles from "./Inicio.module.css";
// import backgroundImage from "../Assets/home.png";
import backgroundImage from "../Assets/home-2.avif";
// import backgroundImage from "../Assets/home-3.jpg";
import backgroundImage from "../Assets/home.png";
import NextCongress from "../Assets/congress-2023-adeip.png";
import PageLayoutTop from "../Components/PageLayoutTop";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className={styles.container}>
      <PageLayoutTop
        // title={"ASOCIACIÓN DE ESTUDIO E INVESTIGACIÓN EN PSICODIAGNÓSTICO"}
        title={"ADEIP"}
        secondaryTitle={
          "Asociación de Estudio e Investigación en Psicodiagnóstico"
        }
        titleLarge={true}
        image={backgroundImage}
      />
      <section className={styles["section-associate"]}>
        <div className={styles.row}>
          <h2 className={styles["heading-secondary"]}>
            Sea miembro de A.D.E.I.P
          </h2>
          <Link
            to="/formulario-miembro"
            className={`${styles.btn} ${styles["btn-associate"]}`}
          >
            Asociese
          </Link>
        </div>
      </section>
      <main>
        <section className={styles["section-history"]}>
          <div className={styles.row}>
            <h3 className={styles["heading-tertiary"]}>Historia de ADEIP</h3>
            <p>
              A.D.E.I.P. es una Asociación Civil, fundada en 1988 con el
              propósito de promover la participación, el intercambio y el
              nucleamiento de los profesionales de todo el país Interesados en
              el psicodiagnóstico.
            </p>
            <a href="/" className={`${styles.btn} ${styles["btn-adeip-info"]}`}>
              Más Información
            </a>
          </div>
        </section>
        <section className={styles["section-congress"]}>
          <div className={`${styles.row} ${styles["display--flex-column"]}`}>
            <h3 className={styles["heading-tertiary"]}>Próximo Congreso</h3>
            <img src={NextCongress} alt="Próximo Congreso" />
            <a href="/" className={`${styles.btn} ${styles["btn-contact"]}`}>
              Contacto
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Inicio;
