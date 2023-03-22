import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.carrousel}>
        <h1>SOBRE ADEIP</h1>
      </div>
      <main>
        <section className={styles["section-pair"]}>
          <h2>Sede Nacional</h2>
          <p>
            ASOCIACIÓN ARGENTINA DE ESTUDIO E INVESTIGACIÓN EN PSICODIAGNÓSTICO
          </p>
          <p>Rama Miembro de la INTERNATIONAL RORSCHACH SOCIETY</p>
          <h3>Dirección</h3>
          <p>
            RIOJA 1037 - PISO 4 <br /> TELEFAX (0341) 424-0013(2000) <br />{" "}
            ROSARIO - ARGENTINA
          </p>
        </section>
        <section className={styles["section-unpair"]}>
          <h2>Fundación</h2>
          <p>A.D.E.I.P ES ASOCIACION CIVIL CON PERSONERIA JURÍDICA Nº 16.917</p>
          <p>
            FUNDADA EL 18 DE SETIEMBRE DE 1988, EN SAN MIGUEL DE TUCUMAN,
            REPUBLICA ARGENTINA
          </p>
        </section>
        <section className={styles["section-pair"]}>
          <h2>Propósitos</h2>
          <ul>
            <li>
              Promover la participación, el intercambio y el nucleamiento de los
              profesionales de todo el país Interesados en el psicodiagnóstico.
            </li>
            <li>
              Propiciar el crecimiento y la utilización de las distintas
              técnicas psicodiagnósticas, implementando cursos, seminarios y
              talleres.
            </li>
            <li>Estimular y apoyar la investigación.</li>
            <li>
              Promover el ejercicio profesional del Psicodiagnóstico en los
              niveles científicos que su importancia requiere, como así también,
              gestionar normas legales y reglamentarias que lo establezcan y
              reconozcan.
            </li>
            <li>
              Defender la actividad psicodiagnosticadora ante las instituciones
              que corresponda, rescatando su importancia desde la formación
              universitaria.
            </li>
            <li>Favorecer el trabajo intra e interdisciplinario.</li>
            <li>
              Promover la aplicación del psicodiagnóstico y sus aportes en la
              prevención y asistencia en salud Mental.
            </li>
            <li>Instituir órganos de divulgación en todos los ordenes.</li>
            <li>Promover la organización de eventos científicos periódicos.</li>
          </ul>
        </section>
        <section className={styles["section-unpair"]}>
          <h2>Beneficios</h2>
          <ul>
            <li>
              Tres boletines al año con información y publicación científica
              (GRATUITO PARA SOCIOS)
            </li>
            <li>
              Congreso anual en distintas zonas del país (CON INSCRIPCIÓN
              PREFERENCIAL PARA SOCIOS)
            </li>
            <li>
              Acceso a la información de la base de datos de la biblioteca
              Jornadas , cursos, simposium, seminarios, mesas redondas y
              talleres
            </li>
            <li>Grupos de investigación supervisados por especialistas</li>
            <li>Supervisiones en distintas áreas</li>
            <p>
              ESTAS ACTIVIDADES SE REALIZAN EN TODO EL PAIS Y SON GRATUITAS O
              CON ARANCELES DIFERENCIADOS PARA SOCIOS
            </p>
          </ul>
        </section>
        <section className={styles["section-pair"]}>
          <h2>Estructura Organizativa</h2>
          <p>Consejo Directivo y Delegaciones</p>
          <p>Editor y Comité editorial revista “PSICODIAGNOSTICAR”</p>
          <h3>Comisiones</h3>
          <ul>
            <li>Comisión Docencia</li>
            <li>Comisión de Investigación</li>
            <li>Comisión Internacional</li>
            <li>Consejo Deontológico</li>
            <li>Consejo Asesor</li>
          </ul>
        </section>
        <section className={styles["section-unpair"]}>
          <h2>Actividades</h2>
          <ul>
            <li>Congreso nacional anual</li>
            <li>Jornadas nacionales y de las delegaciones</li>
            <li>Seminarios, cursos, conferencias</li>
            <li>Intercambios regionales</li>
            <li>Publicaciones -revista anual “PSICODIAGNOSTICAR”</li>
            <li>Boletín informativo</li>
            <li>cuatrimestral.</li>
            <li>
              Banco de documentación bibliográfica Suscripción a revistas
              extranjeras
            </li>
            <li>Convenios de intercambio con universidades</li>
            <li>Convenios con instituciones extranjeras</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default About;
