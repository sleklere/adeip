import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/congress.jpg";
import styles from "./Congresos.module.css";

function Congresos() {
  return (
    <>
      <PageLayoutTop title={"CONGRESOS"} image={backgroundImage} />
      <main className={styles.main}>
        <section className={styles["section-congress"]}>
          <div>
            <h2 className={styles["heading-secondary"]}>
              Congresos realizados por ADEIP
            </h2>
            <h3 className={styles["heading-tertiary"]}>Un camino recorrido</h3>
            <div className={styles["congresses-timeline"]}>
              <p>
                XXIV Congreso Nacional de Psicodiagnóstico <br /> “El
                psicodiagnóstico en la era digital: los vínculos en tiempos de
                redes sociales” <br /> Córdoba, 2022
              </p>
              <p>
                XXIII Congreso Nacional de Psicodiagnóstico <br />
                “Psicodiagnóstico y cultura. Intervención en las nuevas
                realidades” <br /> Santiago del Estero, 2019.
              </p>
              <p>
                XXII Congreso Nacional de Psicodiagnóstico <br /> “La creación”
                <br />
                Rosario, 2018.
              </p>
              <p>
                XXI Congreso Nacional de Psicodiagnóstico <br /> “Integrando
                perspectivas en contextos diversos” <br /> CABA ,2017.
              </p>
              <p>
                XX Congreso Nacional de Psicodiagnóstico <br /> “El
                psicodiagnóstico y los desafíos actuales. Identificando
                potencialiades” <br /> San Luis, 2016.
              </p>
              <p>
                XIX Congreso Nacional de Psicodiagnóstico <br /> “Evaluando
                vulnerabilidades en diferentes contextos” <br /> Santa Fe, 2015.
              </p>
              <p>
                XVIII Congreso Nacional de Psicodiagnóstico <br />
                “Psicodiagnóstico. Articulaciones interdisciplinarias” <br />
                Mar del Plata, 2014.
              </p>
              <p>
                XVII Congreso Nacional de Psicodiagnóstico <br /> “El
                diagnóstico psicológico en la actualidad. Subjetividades,
                contextos e instrumentos” <br /> C.A.B.A. , 2013.
              </p>
              <p>
                XVI Congreso Nacional de Psicodiagnóstico <br /> “La
                investigación en psicodiagnóstico. El vínculo en el origen y
                desarrollo de la investigación” <br /> Rosario, 2012.
              </p>
              <p>
                XV Congreso Nacional de Psicodiagnóstico <br />
                “Psicodiagnóstico, demandas actuales, prevención” <br /> Tucumán
                2011.
              </p>
              <p>
                XIV Congreso Nacional de Psicodiagnóstico <br />
                “Psicodiagnóstico. Culturas y evaluaciones” <br /> Corrientes,
                2010.
              </p>
              <p>
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
