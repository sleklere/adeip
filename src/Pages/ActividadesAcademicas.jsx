import PageLayoutTop from "../Components/PageLayoutTop";
import Course from "../Components/Course";
import styles from "./ActividadesAcademicas.module.css";
import imgCourse1 from "../Assets/actividadesAcademicas/course1.jpg";
import imgCourse2 from "../Assets/actividadesAcademicas/course2.jpg";

function ActividadesAcademicas() {
  return (
    <div className={styles["container"]}>
      <PageLayoutTop title={"ACTIVIDADES ACADÉMICAS"} />
      <main className={styles["main-actividades"]}>
        <h2 className={styles["heading-secondary-actividades"]}>Cursos</h2>
        <div className={styles["cursos-container"]}>
          <Course
            courseImg={imgCourse1}
            courseName="John Exner"
            courseDate="15/04"
            courseModality="Virtual"
            courseIncriptionPartners="$5000"
            courseIncriptionNoPartners="$7000"
          />
          <Course
            courseImg={imgCourse2}
            courseName="Pascal Roman"
            courseDate="28/04"
            courseModality="Virtual"
            courseIncriptionPartners="$3000"
            courseIncriptionNoPartners="$4000"
          />
        </div>
      </main>
    </div>
  );
}

export default ActividadesAcademicas;
