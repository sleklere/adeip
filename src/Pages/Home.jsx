import styles from "./Home.module.css";

import HomeImg from "../Assets/home.png";
import Card1 from "../Assets/card-1.png";
import Card2 from "../Assets/card-2.png";
import Card3 from "../Assets/card-3.png";

function Home() {
  return (
    <main>
      {/* Header */}
      <div>
        <div className={styles.carrousel}>
          <img src={HomeImg} alt="Psicólogo conversando con paciente." />
          <h2>Asociacion de Estudio e Investigacion en Psicodiagnóstico</h2>
        </div>
        <section className={styles.associate}>
          <h3>Sea miembro de A.D.E.I.P</h3>
          <button className={styles["associate-button"]}>
            <a href="/">Asociese</a>
          </button>
        </section>
        <section className={styles.history}>
          <h3>Historia de ADEIP</h3>
          <p>
            A.D.E.I.P. es una Asociación Civil, fundada en 1988 con el propósito
            de promover la participación, el intercambio y el nucleamiento de
            los profesionales de todo el país Interesados en el
            psicodiagnóstico.
          </p>
          <button className={styles["adeip-info-button"]}>
            <a href="/">Más Información</a>
          </button>
        </section>
        <section className={styles.news}>
          <h3>Novedades</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src={Card1} alt="Foto miniatura del curso" />
              <div className={styles["card-info"]}>
                <h4>CURSO SISTEMÁTICO TEÓRICO-PRÁCTICO</h4>
                <p>
                  Psicodiagnóstico de Rorschach sistema comprehensivo zona
                  Oeste-CABA
                </p>
                <button className={styles["card-info-button"]}>
                  <a href="/">Más Info</a>
                </button>
              </div>
            </div>
            <div className={styles.card}>
              <img src={Card2} alt="Foto miniatura del curso" />
              <div className={styles["card-info"]}>
                <h4>
                  Pandemia. Evalución del impacto en niñas, niños y adolescentes
                </h4>
                <p>
                  Invitación a la videoconferencia del 30 de Abril a las 9 Hs.
                </p>
                <button className={styles["card-info-button"]}>
                  <a href="/">Más Info</a>
                </button>
              </div>
            </div>
            <div className={styles.card}>
              <img src={Card3} alt="Foto miniatura del curso" />
              <div className={styles["card-info"]}>
                <h4>
                  Curso INTENSIVO Rorschach Sist. Comprehensivo JOHN EXNER
                </h4>
                <p>
                  Inscripciones abiertas Curso Intensivo, destinado a
                  profesionales psicólogos/as y estudiantes avanzados de
                  psicología
                </p>
                <button className={styles["card-info-button"]}>
                  <a href="/">Más Info</a>
                </button>
              </div>
            </div>
          </div>
          <button className={styles["contact-button"]}>
            <a href="/contacto">Contacto</a>
          </button>
        </section>
        {/* Footer */}
      </div>
    </main>
  );
}

export default Home;
