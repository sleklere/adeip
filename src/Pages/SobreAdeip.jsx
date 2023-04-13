import styles from "./SobreAdeip.module.css";
import PageLayoutTop from "../Components/PageLayoutTop";

function SobreAdeip() {
  return (
    <div className={styles.container}>
      <PageLayoutTop title={"ACERCA DE ADEIP"} />
      <main className={styles.main}>
        <section className={`${styles.section} ${styles["section-unpair"]}`}>
          <div>
            <h2 className={styles["heading-secondary"]}>Sede Nacional</h2>
            <p className={styles["margin-bottom--small"]}>
              ASOCIACIÓN ARGENTINA DE ESTUDIO E INVESTIGACIÓN EN
              PSICODIAGNÓSTICO
            </p>
            <p>Rama Miembro de la INTERNATIONAL RORSCHACH SOCIETY</p>
            <h3 className={styles["heading-tertiary"]}>Dirección</h3>
            <p>
              RIOJA 1037 - PISO 4 <br /> TELEFAX (0341) 424-0013(2000) <br />
              ROSARIO - ARGENTINA
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles["section-pair"]}`}>
          <div>
            <h2 className={styles["heading-secondary"]}>Fundación</h2>
            <p>ADEIP ES ASOCIACION CIVIL CON PERSONERIA JURÍDICA Nº 16.917</p>
            <br />
            <p>
              FUNDADA EL 18 DE SETIEMBRE DE 1988, EN SAN MIGUEL DE TUCUMAN,
              REPUBLICA ARGENTINA
            </p>
          </div>
        </section>
        <section className={`${styles.section} ${styles["section-unpair"]}`}>
          <div>
            <h2 className={styles["heading-secondary"]}>Propósitos</h2>
            <ul>
              <li>
                Promover la participación, el intercambio y el nucleamiento de
                los profesionales de todo el país Interesados en el
                psicodiagnóstico.
              </li>
              <li>
                Propiciar el crecimiento y la utilización de las distintas
                técnicas psicodiagnósticas, implementando cursos, seminarios y
                talleres.
              </li>
              <li>Estimular y apoyar la investigación.</li>
              <li>
                Promover el ejercicio profesional del Psicodiagnóstico en los
                niveles científicos que su importancia requiere, como así
                también, gestionar normas legales y reglamentarias que lo
                establezcan y reconozcan.
              </li>
              <li>
                Defender la actividad psicodiagnosticadora ante las
                instituciones que corresponda, rescatando su importancia desde
                la formación universitaria.
              </li>
              <li>Favorecer el trabajo intra e interdisciplinario.</li>
              <li>
                Promover la aplicación del psicodiagnóstico y sus aportes en la
                prevención y asistencia en salud Mental.
              </li>
              <li>Instituir órganos de divulgación en todos los ordenes.</li>
              <li>
                Promover la organización de eventos científicos periódicos.
              </li>
            </ul>
          </div>
        </section>
        <section className={`${styles.section} ${styles["section-pair"]}`}>
          <div className={styles.benefits}>
            <h2 className={styles["heading-secondary"]}>Beneficios</h2>
            <ul>
              <li>
                Boletines periódicos con información institucional actualizada y
                publicación de artículos científicos (GRATUITO PARA SOCIOS)
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
              <li>
                Grupos de intercambio sobre el psicodiagnóstico en distintas
                áreas de aplicación
              </li>
              <li>Supervisiones en distintas áreas</li>
            </ul>
          </div>
        </section>
        <section className={`${styles.section} ${styles["section-unpair"]}`}>
          <div>
            <h2 className={styles["heading-secondary"]}>
              Estructura Organizativa
            </h2>
            <p className={styles["margin-bottom--small"]}>
              Consejo Directivo y Delegaciones
            </p>
            <p>Editor y Comité editorial de revista “PSICODIAGNOSTICAR”</p>
            <h3 className={styles["heading-tertiary"]}>Comisiones</h3>
            <ul className={styles.comissions}>
              <li>Comisión Docencia</li>
              <li>Consejo Asesor</li>
            </ul>
          </div>
        </section>
        <section className={`${styles.section} ${styles["section-pair"]}`}>
          <div>
            <h2 className={styles["heading-secondary"]}>Actividades</h2>
            <ul>
              <li>Congreso nacional anual</li>
              <li>Jornadas nacionales y de las delegaciones</li>
              <li>Seminarios, cursos, conferencias</li>
              <li>Intercambios regionales</li>
              <li>
                Publicaciones: Boletín informativo periódico, revista anual
                “PSICODIAGNOSTICAR”, y otros.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SobreAdeip;
