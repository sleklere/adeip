import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/actividades-academicas-copia.jpg";

import styles from "./ActividadesAcademicas.module.css";
import Course from "../Components/Course";

function ActividadesAcademicas() {
  return (
    <div className={styles["container"]}>
      <PageLayoutTop title={"ACTIVIDADES ACADEMICAS"} image={backgroundImage} />
      <main>
        <h2 className={styles["heading-secondary-actividades"]}>Cursos</h2>
        <div className={styles["cursos-container"]}>
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
