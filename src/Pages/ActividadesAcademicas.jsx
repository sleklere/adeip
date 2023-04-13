import PageLayoutTop from "../Components/PageLayoutTop";
import Course from "../Components/Course";
import styles from "./ActividadesAcademicas.module.css";

function ActividadesAcademicas() {
  return (
    <div className={styles["container"]}>
      <PageLayoutTop
        title={"ACTIVIDADES ACADÉMICAS"}
        // image={backgroundImage}
      />
      <main className={styles["main-actividades"]}>
        <h2 className={styles["heading-secondary-actividades"]}>Cursos</h2>
        <div className={styles["cursos-container"]}>
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </main>
    </div>
  );
}

export default ActividadesAcademicas;
