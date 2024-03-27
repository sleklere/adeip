import styles from "./Course.module.css";

function Course(props) {
  return (
    <div className={styles["container-curso"]}>
      <img
        src={props.courseImg}
        className={styles["img-curso"]}
        alt="Flyer de un curso"
      />
      <div className={styles["container-curso-text"]}>
        {/* <p className={styles["ubicacion-curso"]}>{props.courseUbication}</p> */}
        <h2 className={styles["nombre-curso"]}>{props.courseName}</h2>
        <div className={styles["info-curso-container"]}>
          <p>Fechas: {props.courseDate}</p>
          <p>Modalidad: {props.courseModality}</p>
          <p>Inscripción Socios: {props.courseIncriptionPartners}</p>
          <p>Inscripción No Socios: {props.courseIncriptionNoPartners}</p>
        </div>
        <div className={styles["btn-curso-container"]}>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button className={styles["btn-curso"]}>Mas Información</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Course;
