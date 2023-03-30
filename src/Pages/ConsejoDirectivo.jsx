import styles from "./ConsejoDirectivo.module.css";

import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/consejo-directivo.jpg";

import Presidenta from "../Assets/presidenta-adeip.jpeg";
import VicepresidentaPrimera from "../Assets/vicepresidenta-primera-adeip.jpeg";
import VicepresidenteSegundo from "../Assets/person.png";

function ConsejoDirectivo() {
  return (
    <div className={styles.container}>
      <PageLayoutTop title={"CONSEJO DIRECTIVO"} image={backgroundImage} />
      <div className={styles.title}>
        <h2 className={styles["heading-secondary"]}>
          Consejo Directivo A.D.E.I.P 2022-2023
        </h2>
      </div>
      <main className={styles.main}>
        <section className={styles["charges-primary"]}>
          <div className={styles.charge}>
            <img src={Presidenta} alt="" />
            <div className={styles["charge-info"]}>
              <p>Presidenta</p>
              <h3 className={styles["heading-tertiary"]}>María Elena Ocampo</h3>
            </div>
          </div>
          <div className={styles.charge}>
            <img src={VicepresidentaPrimera} alt="" />
            <div className={styles["charge-info"]}>
              <p>Vicepresidenta 1ª</p>
              <h3 className={styles["heading-tertiary"]}>Ana María Bernia</h3>
            </div>
          </div>
          <div className={styles.charge}>
            <img src={VicepresidenteSegundo} alt="" />
            <div className={styles["charge-info"]}>
              <p>Vicepresidente 2º</p>
              <h3 className={styles["heading-tertiary"]}>
                Ernesto Federico Pais
              </h3>
            </div>
          </div>
        </section>
        <section className={styles["charges-secondary"]}>
          <div>
            <h4 className={styles["heading-quaternary"]}>Secretaria</h4>
            <p>Silvina Cohen Imach</p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Prosecretaria</h4>
            <p>Silvina Lis García</p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Tesorera</h4>
            <p>Liliana Pernetti</p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Protesorera</h4>
            <p>María Aurelia López</p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Vocales Titulares</h4>
            <p>
              Betria Alicia, Oscar Melillo, Ana Martos y Mula,Pontikos Mirna,
              Falocchi Andrea
            </p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Vocales Suplentes</h4>
            <p>
              Fernando Castro, Levantini Susana, Laura Lesik,Cecilia Diez,
              Marcelo Alé
            </p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Síndicos</h4>
            <p>Mercado Beatriz, CostanzaGabriela; Suplente Romina Colacci</p>
          </div>
          <div>
            <h4 className={styles["heading-quaternary"]}>Past President</h4>
            <p>Mónica Guinzbourg</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default ConsejoDirectivo;
