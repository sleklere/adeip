import styles from "./Inicio.module.css";
function Inicio() {
  return (
    <div className={styles.container}>
      <div className={styles.carrousel}>
        <h1>Asociación de Estudio e Investigación en Psicodiagnóstico</h1>
      </div>
      <section className={styles.associate}>
        <div>
          <h3 className={styles["heading-terciary"]}>
            Sea miembro de A.D.E.I.P
          </h3>
          <a href="/" className={styles["associate-button"]}>
            Asociese
          </a>
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
