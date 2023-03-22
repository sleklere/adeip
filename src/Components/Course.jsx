import styles from "./Course.module.css";

function Course() {
  return (
    <div className={styles["curso"]}>
      <div className={styles["img-curso"]}></div>
      <p className={styles["ubicacion-curso"]}>Ubicación del curso</p>
      <h2 className={styles["nombre-curso"]}>Nombre del Curso</h2>
      <p className={styles["info-curso"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        illo accusamus porro esse deserunt sed assumenda neque minima vitae.
        Architecto amet veritatis excepturi placeat quasi ipsa cum, eveniet
        iusto dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Qui mollitia molestiae autem earum, aspernatur sunt expedita doloribus
        dolores velit! Vitae voluptates neque culpa omnis voluptatum illum
        adipisci blanditiis veniam fuga.
      </p>
      <div className={styles["btn-curso-container"]}>
        <button className={styles["btn-curso"]}>Mas Información</button>
      </div>
    </div>
  );
}

export default Course;