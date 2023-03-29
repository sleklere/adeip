import styles from "./ConsejoDirectivo.module.css";

import Presidenta from "../Assets/presidenta-adeip.jpeg";
import VicepresidentaPrimera from "../Assets/vicepresidenta-primera-adeip.jpeg";
import VicepresidenteSegundo from "../Assets/person.png";

function ConsejoDirectivo() {
  return (
    <div className={styles.container}>
      <div className={styles.carrousel}>
        <h1 className={styles["heading-primary"]}>Consejo Directivo</h1>
      </div>
      <div className={styles.title}>
        <h2 className={styles["heading-secondary"]}>
          Consejo Directivo A.D.E.I.P 2022-2023
        </h2>
      </div>
      <main className={styles.main}>
        <section className={styles["charges-primary"]}>
          <div className={styles.charge}>
            <img src={Presidenta} alt="" />
            <p>Presidente</p>
            <h3 className={styles["heading-tertiary"]}>María Elena Ocampo</h3>
          </div>
          <div className={styles.charge}>
            <img src={VicepresidentaPrimera} alt="" />
            <p>Vicepresidenta 1ª</p>
            <h3 className={styles["heading-tertiary"]}>Ana María Bernia</h3>
          </div>
          <div className={styles.charge}>
            <img src={VicepresidenteSegundo} alt="" />
            <p>Vicepresidente 2º</p>
            <h3 className={styles["heading-tertiary"]}>
              Ernesto Federico Pais
            </h3>
          </div>
        </section>
        <section className={styles["charges-secondary"]}>
          <div>
            <p>Secretaria</p>
            <h3 className={styles["heading-tertiary"]}>Silvina Cohen Imach</h3>
          </div>
          <div>
            <p>Prosecretaria</p>
            <h3 className={styles["heading-tertiary"]}>Silvina Lis García</h3>
          </div>
          <div>
            <p>Tesorera</p>
            <h3 className={styles["heading-tertiary"]}>Liliana Pernetti</h3>
          </div>
          <div>
            <p>Protesorera</p>
            <h3 className={styles["heading-tertiary"]}>María Aurelia López</h3>
          </div>
          <div>
            <h3 className={styles["heading-tertiary"]}>Vocales Titulares</h3>
            <p>
              Betria Alicia, Oscar Melillo, Ana Martos y Mula,Pontikos Mirna,
              Falocchi Andrea
            </p>
          </div>
          <div>
            <h3 className={styles["heading-tertiary"]}>Vocales Suplentes</h3>
            <p>
              Fernando Castro, Levantini Susana, Laura Lesik,Cecilia Diez,
              Marcelo Alé
            </p>
          </div>
          <div>
            <h3 className={styles["heading-tertiary"]}>Síndicos</h3>
            <p>
              Mercado Beatriz, CostanzaGabriela; <strong>Suplente:</strong>
              Romina Colacci
            </p>
          </div>
          <div>
            <h3 className={styles["heading-tertiary"]}>Past President:</h3>
            <p>Mónica Guinzbourg</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default ConsejoDirectivo;
