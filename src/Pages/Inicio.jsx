import styles from "./Inicio.module.css";
import backgroundImage from "../Assets/home.png";
import PageLayoutTop from "../Components/PageLayoutTop";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div className={styles.container}>
      <PageLayoutTop
        title={"ASOCIACIÓN DE ESTUDIO E INVESTIGACIÓN EN PSICODIAGNÓSTICO"}
        image={backgroundImage}
      />
      <section className={styles.associate}>
        <div>
          <h3 className={styles["heading-terciary"]}>
            Sea miembro de A.D.E.I.P
          </h3>
          <Link to="/formulario-miembro" className={styles["associate-button"]}>
            Asociese
          </Link>
        </div>
      </section>
      <main>
        <section className={styles.history}>
          <h3 className={styles["heading-terciary"]}>Historia de ADEIP</h3>
          <p>
            A.D.E.I.P. es una Asociación Civil, fundada en 1988 con el propósito
            de promover la participación, el intercambio y el nucleamiento de
            los profesionales de todo el país Interesados en el
            psicodiagnóstico.
          </p>
          <a href="/" className={styles["adeip-info-button"]}>
            Más Información
          </a>
        </section>
        <section className={styles.news}>
          <h3 className={styles["heading-terciary"]}>Próximo Congreso</h3>
          <a href="/" className={styles["contact-button"]}>
            Contacto
          </a>
        </section>
      </main>
    </div>
  );
}

export default Inicio;
