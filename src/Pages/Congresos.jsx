import styles from "./Congresos.module.css";

import PageLayoutTop from "../Components/PageLayoutTop";
// import backgroundImage from "../Assets/congress.jpg";

function Congresos() {
  return (
    <>
      <PageLayoutTop
        title={"CONGRESOS"}
        // image={backgroundImage}
      />
      <main className={styles.main}>
        <section className={styles["section-congress"]}>
          <div>
            <h2 className={styles["heading-secondary"]}>
              Congresos realizados por ADEIP
            </h2>
            <h3 className={styles["heading-tertiary"]}>Un camino recorrido</h3>
            <div className={styles["congresses-timeline"]}>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XXIV Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “El psicodiagnóstico en la era digital: los vínculos en
                  tiempos de redes sociales”
                </p>
                <p className={styles["congress-date"]}>Córdoba, 2022</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XXIII Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “Psicodiagnóstico y cultura. Intervención en las nuevas
                  realidades”
                </p>
                <p className={styles["congress-date"]}>
                  Santiago del Estero, 2019
                </p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XXII Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}> “La creación”</p>
                <p className={styles["congress-date"]}>Rosario, 2018</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XXI Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “Integrando perspectivas en contextos diversos”
                </p>
                <p className={styles["congress-date"]}>CABA, 2017</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XX Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “El psicodiagnóstico y los desafíos actuales. Identificando
                  potencialiades”
                </p>
                <p className={styles["congress-date"]}>San Luis, 2016</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XIX Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “Evaluando vulnerabilidades en diferentes contextos”
                </p>
                <p className={styles["congress-date"]}>Santa Fe, 2015</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XVIII Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “Psicodiagnóstico. Articulaciones interdisciplinarias”
                </p>
                <p className={styles["congress-date"]}>Mar del Plata, 2014</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XVII Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “El diagnóstico psicológico en la actualidad. Subjetividades,
                  contextos e instrumentos”
                </p>
                <p className={styles["congress-date"]}>C.A.B.A., 2013</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XVI Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “La investigación en psicodiagnóstico. El vínculo en el origen
                  y desarrollo de la investigación”
                </p>
                <p className={styles["congress-date"]}>Rosario, 2012</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XV Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “Psicodiagnóstico, demandas actuales, prevención”
                </p>
                <p className={styles["congress-date"]}>Tucumán, 2011</p>
              </div>
              <div className={styles.congress}>
                <p className={styles["congress-number"]}>
                  XIV Congreso Nacional de Psicodiagnóstico
                </p>
                <p className={styles["congress-name"]}>
                  “Psicodiagnóstico. Culturas y evaluaciones”
                </p>
                <p className={styles["congress-date"]}>Corrientes, 2010</p>
              </div>
              <p className={styles["first-congress"]}>
                El I Congreso Nacional de Psicodiagnóstico y VIII Jornadas
                Nacionales de ADEIP, “Psicodiagnosticar. Un camino hacia la
                prevención”, se realizó en San Martín de los Andes, 1997.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Congresos;
