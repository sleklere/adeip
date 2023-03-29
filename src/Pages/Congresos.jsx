import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/congress.jpg";
import styles from "./Congresos.module.css";

function Congresos() {
  return (
    <>
      <PageLayoutTop title={"CONGRESOS"} image={backgroundImage} />
      <main className={styles.hola}>
        <section>
          <div>
            <h2>Congresos realizados por ADEIP</h2>
            <h3>Un camino recorrido</h3>
            <p>
              XXIV Congreso Nacional de Psicodiagnóstico – “El psicodiagnóstico
              en la era digital: los vínculos en tiempos de redes sociales”.
              Córdoba, 2022.
            </p>
            <p>
              XXIII Congreso Nacional de Psicodiagnóstico - “Psicodiagnóstico y
              cultura. Intervención en las nuevas realidades”. Santiago del
              Estero, 2019.
            </p>
            <p>
              XXII Congreso Nacional de Psicodiagnóstico – “La creación”.
              Rosario, 2018.
            </p>
            <p>
              XXI Congreso Nacional de Psicodiagnóstico – “Integrando
              perspectivas en contextos diversos” . CABA ,2017.
            </p>
            <p>
              XX Congreso Nacional de Psicodiagnóstico – “El psicodiagnóstico y
              los desafíos actuales. Identificando potencialiades”. San Luis,
              2016.
            </p>
            <p>
              XIX Congreso Nacional de Psicodiagnóstico – “Evaluando
              vulnerabilidades en diferentes contextos”. Santa Fe, 2015.
            </p>
            <p>
              XVIII Congreso Nacional de Psicodiagnóstico – “Psicodiagnóstico.
              Articulaciones interdisciplinarias”. Mar del Plata, 2014.
            </p>
            <p>
              XVII Congreso Nacional de Psicodiagnóstico – “El diagnóstico
              psicológico en la actualidad. Subjetividades, contextos e
              instrumentos”. C.A.B.A. , 2013.
            </p>
            <p>
              XVI Congreso Nacional de Psicodiagnóstico – “La investigación en
              psicodiagnóstico. El vínculo en el origen y desarrollo de la
              investigación”. Rosario, 2012.
            </p>
            <p>
              XV Congreso Nacional de Psicodiagnóstico – “Psicodiagnóstico,
              demandas actuales, prevención”. Tucumán 2011.
            </p>
            <p>
              XIV Congreso Nacional de Psicodiagnóstico. “Psicodiagnóstico.
              Culturas y evaluaciones”. Corrientes, 2010.
            </p>
            <p>ETC</p>
            <p>
              <strong>
                El I Congreso Nacional de Psicodiagnóstico y VIII Jornadas
                Nacionales de ADEIP, “Psicodiagnosticar. Un camino hacia la
                prevención”, se realizó en San Martín de los Andes, 1997.
              </strong>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Congresos;
