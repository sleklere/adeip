import PageLayoutTop from "../Components/PageLayoutTop";
import styles from "./ConsejoDirectivo.module.css";

function ConsejoDirectivo() {
  return (
    <div className={styles.container}>
      <PageLayoutTop title={"CONSEJO DIRECTIVO"} />
      <div className={styles.title}>
        <h2 className={styles["heading-secondary"]}>
          Consejo Directivo ADEIP 2022-2023
        </h2>
      </div>
      <main className={styles.main}>
        <section className={styles.charges}>
          <div className={styles.charge}>
            <h3 className={styles["heading-tertiary"]}>Presidente</h3>
            <p>María Elena Ocampo</p>
          </div>
          <div className={`${styles.charge} ${styles["charge-pair"]}`}>
            <h3 className={styles["heading-tertiary"]}>Vicepresidente 1ª</h3>
            <p>Ana María Bernia</p>
          </div>
          <div className={styles.charge}>
            <h3 className={styles["heading-tertiary"]}>Vicepresidente 2°</h3>
            <p>Ernesto Federico Pais</p>
          </div>
          <div className={`${styles.charge} ${styles["charge-pair"]}`}>
            <h4 className={styles["heading-tertiary"]}>Secretaria</h4>
            <p>Silvina Cohen Imach</p>
          </div>
          <div className={styles.charge}>
            <h4 className={styles["heading-tertiary"]}>Prosecretaria</h4>
            <p>Silvina Lis García</p>
          </div>
          <div className={`${styles.charge} ${styles["charge-pair"]}`}>
            <h4 className={styles["heading-tertiary"]}>Tesorera</h4>
            <p>Liliana Pernetti</p>
          </div>
          <div className={styles.charge}>
            <h4 className={styles["heading-tertiary"]}>Protesorera</h4>
            <p>María Aurelia López</p>
          </div>
          <div className={`${styles.charge} ${styles["charge-pair"]}`}>
            <h4 className={styles["heading-tertiary"]}>Vocales Titulares</h4>
            <p>
              Alicia Betria, Oscar Melillo, Ana Martos y Mula, Mirna Pontikos,
              Andrea Falocchi
            </p>
          </div>
          <div className={styles.charge}>
            <h4 className={styles["heading-tertiary"]}>Vocales Suplentes</h4>
            <p>
              Fernando Castro, Susana Levantini, Laura Lesik, Cecilia Diez,
              Marcelo Alé
            </p>
          </div>
          <div className={`${styles.charge} ${styles["charge-pair"]}`}>
            <h4 className={styles["heading-tertiary"]}>Síndicos</h4>
            <p>Beatriz Mercado, Gabriela Costanza; Suplente: Romina Colacci</p>
          </div>
          <div className={styles.charge}>
            <h4 className={styles["heading-tertiary"]}>Past President</h4>
            <p>Mónica Guinzbourg</p>
          </div>
        </section>
      </main>
    </div>
  );
}
export default ConsejoDirectivo;
