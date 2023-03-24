import styles from "./ActividadesAcademicas.module.css";
import Course from "../Components/Course";

function ActividadesAcademicas() {
  return (
    <div className={styles["container"]}>
      <div className={styles["titulo"]}>
        <h1>ACTIVIDADES ACADÉMICAS</h1>
      </div>
      <main>
        <h2>Cursos</h2>
        <div className={styles["cursos-container"]}>
          <Course />
          <Course />
          <Course />
        </div>
      </main>
    </div>
  );
}

export default ActividadesAcademicas;
