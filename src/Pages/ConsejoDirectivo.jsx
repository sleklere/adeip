import styles from "./ConsejoDirectivo.module.css";
import Person from "../Assets/person.png";

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
            <img src={Person} alt="" />
            <p>Presidente</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
          <div className={styles.charge}>
            <img src={Person} alt="" />
            <p>Vicepresidenta 1ra</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
          <div className={styles.charge}>
            <img src={Person} alt="" />
            <p>Vicepresidenta 2da</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
          <div className={styles.charge}>
            <img src={Person} alt="" />
            <p>Secretaria</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
          <div className={styles.charge}>
            <img src={Person} alt="" />
            <p>Pro Secretaria</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
          <div className={styles.charge}>
            <img src={Person} alt="" />
            <p>Tesorera</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
          <div className={styles.charge}>
            <img src={Person} alt="" />
            <p>Pro Tesorera</p>
            <h3 className={styles["heading-tertiary"]}>Nombre</h3>
          </div>
        </section>
        <section className={styles["charges-secondary"]}>
          <div>
            <h3 className={styles["heading-tertiary"]}>Vocales Titulares</h3>
            <p>
              Dra. Marta Díaz de Dragotta, Lic. Beatriz Mercado, Lic. Silvina
              Lis Garcia, Lic. Gabriela Costanza, Psic. Mirna Pontikos
            </p>
          </div>
          <div>
            <h3 className={styles["heading-tertiary"]}>Vocales Suplentes</h3>
            <p>
              Psic. Alicia Betria, Lic.Silvina Cohen Imach, Lic. Ernesto, Pais,
              Lic. Ana Martos y Mula, Lic. Carolina Villalba
            </p>
          </div>
          <div>
            <h3 className={styles["heading-tertiary"]}>Síndicos</h3>
            <p>
              Psic. Ana María Bernia, Lic. Marcelo Alé, Suplente: Lic. Malena
              Ocampo
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default ConsejoDirectivo;
