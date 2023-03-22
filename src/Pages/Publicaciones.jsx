import styles from "./Publicaciones.module.css";
import backgroundImage from "../Assets/publicaciones-2.jpg";
import PageLayoutTop from "../Components/PageLayoutTop";
import Card from "../Components/PublicationsCard";

function Publicaciones() {
  return (
    // <div className={styles["container"]}>
    //   <div
    //     className={styles["titulo"]}
    //     style={{
    //       backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImg})`,
    //     }}
    //   >
    //     <h1>PUBLICACIONES</h1>
    //   </div>
    // </div>
    <>
      <PageLayoutTop title={"PUBLICACIONES"} image={backgroundImage} />
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Publicaciones;
