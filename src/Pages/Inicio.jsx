import { Link } from "react-router-dom";
import NextCongress from "../Assets/congress-2023-adeip.png";
import PageLayoutTop from "../Components/PageLayoutTop";
import styles from "./Inicio.module.css";
import backgroundImage from "../Assets/home-2.avif";

function Inicio() {
  return (
    <div className={styles.container}>
      <PageLayoutTop
        title={"ADEIP"}
        secondaryTitle={
          "Asociación de Estudio e Investigación en Psicodiagnóstico"
        }
        titleLarge={true}
        image={backgroundImage}
      />
      <section className={styles["section-associate"]}>
        <div className={styles.row}>
          <h2 className={styles["heading-secondary"]}>Sea miembro de ADEIP</h2>
          <Link to="/formulario-miembro" className={styles["btn-associate"]}>
            Asóciese
          </Link>
        </div>
      </section>
      <main>
        <section className={styles["section-history"]}>
          <div className={styles.row}>
            <h3 className={styles["heading-tertiary"]}>Historia de ADEIP</h3>
            <p>
              ADEIP es una Asociación Civil, fundada en 1988 con el propósito de
              promover la participación, el intercambio y el nucleamiento de los
              profesionales de todo el país Interesados en el psicodiagnóstico.
            </p>
            <Link
              toz="/"
              className={`${styles.btn} ${styles["btn-adeip-info"]}`}
            >
              Más Información
            </Link>
          </div>
        </section>
        <section className={styles["section-congress"]}>
          <div className={`${styles.row} ${styles["display--flex-column"]}`}>
            <h3 className={styles["heading-tertiary"]}>Próximo Congreso</h3>
            <img src={NextCongress} alt="Próximo Congreso" />
            <Link
              to="/congresos"
              className={`${styles.btn} ${styles["btn-contact"]}`}
            >
              Ver Congresos Pasados
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Inicio;
