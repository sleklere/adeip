import PageLayoutTop from "../Components/PageLayoutTop";
import Course from "../Components/Course";
import styles from "./ActividadesAcademicas.module.css";
import imgCourse1 from "../Assets/actividadesAcademicas/course1.jpg";
import imgCourse2 from "../Assets/actividadesAcademicas/course2.jpg";
import imgCourse3 from "../Assets/actividadesAcademicas/course3.png";
import imgCourse4 from "../Assets/actividadesAcademicas/course4.jpeg";
import imgCourse5 from "../Assets/actividadesAcademicas/course5.jpg";
import imgCourse6 from "../Assets/actividadesAcademicas/course6.jpg";
import imgCourse7 from "../Assets/actividadesAcademicas/course7.jpg";
import imgCourse8 from "../Assets/actividadesAcademicas/course8.jpg";
import imgCourse9 from "../Assets/actividadesAcademicas/course9.jpg";

function ActividadesAcademicas() {
  return (
    <div className={styles["container"]}>
      <PageLayoutTop title={"ACTIVIDADES ACADÉMICAS"} />
      <main className={styles["main-actividades"]}>
        <h2 className={styles["heading-secondary-actividades"]}>Cursos</h2>
        <div className={styles["cursos-container"]}>
          <Course
            courseImg={imgCourse2}
            courseName="Pascal Roman"
            courseDate="28/04"
            courseModality="Virtual"
            courseIncriptionPartners="$3000"
            courseIncriptionNoPartners="$4000"
            link={imgCourse2}
          />
          <Course
            courseImg={imgCourse1}
            courseName="John Exner"
            courseDate="15/04"
            courseModality="Virtual"
            courseIncriptionPartners="$5000"
            courseIncriptionNoPartners="$7000"
            link={imgCourse1}
          />
          <Course
            courseImg={imgCourse3}
            courseName="Psicodiagnóstico de Rorschach"
            courseDate="01/04"
            courseModality="Presencial"
            courseIncriptionPartners="$5000"
            courseIncriptionNoPartners="$7000"
            link={imgCourse3}
          />
          <Course
            courseImg={imgCourse4}
            courseName="Técnica gráfica persona con Arma"
            courseDate="29/07"
            courseModality="Virtual"
            courseIncriptionPartners="$4000"
            courseIncriptionNoPartners="$5000"
            link={imgCourse4}
          />
          <Course
            courseImg={imgCourse5}
            courseName="Jornada Rorschach Sistema Comprehensivo"
            courseDate="16/09"
            courseModality="Virtual"
            courseIncriptionPartners="$2000"
            courseIncriptionNoPartners="$3000"
            link={imgCourse5}
          />
          <Course
            courseImg={imgCourse6}
            courseName="Curso Virtual sobre MBTI"
            courseDate="27/10 - 03/11 - 10/11"
            courseModality="Virtual"
            courseIncriptionPartners="$14.000"
            courseIncriptionNoPartners="$22.000"
            link={imgCourse6}
          />
          <Course
            courseImg={imgCourse7}
            courseName="Problemáticas frecuentes en Psicología Forense"
            courseDate="10/11 - 11/11"
            courseModality="Virtual"
            courseIncriptionPartners="$6.500"
            courseIncriptionNoPartners="$7500"
            link={process.env.PUBLIC_URL + "/actividades-course7.pdf"}
          />
          <Course
            courseImg={imgCourse8}
            courseName="Sistema comprehensivo de Rorschach"
            courseDate="13/04 - 27/4"
            courseModality="Virtual"
            courseIncriptionPartners="$15.000"
            courseIncriptionNoPartners="$20.000"
            link={process.env.PUBLIC_URL + "/curso-rorschach-5.pdf"}
          />
          <Course
            courseImg={imgCourse9}
            courseName="Sistema comprehensivo John Exner"
            courseDate="13/04"
            courseModality="Virtual"
            courseIncriptionPartners="$15.000"
            courseIncriptionNoPartners="$20.000"
            link={imgCourse9}
          />
        </div>
      </main>
    </div>
  );
}

export default ActividadesAcademicas;
