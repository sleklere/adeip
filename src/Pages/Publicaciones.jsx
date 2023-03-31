import styles from "./Publicaciones.module.css";
import PageLayoutTop from "../Components/PageLayoutTop";
import Card from "../Components/PublicationsCard";

// import backgroundImage from "../Assets/publicaciones-2.jpg";
// import backgroundImage from "../Assets/publicaciones-3.jpg";
import backgroundImage from "../Assets/page-layout-top.jpg";
// import backgroundImage from "../Assets/home-2.avif";

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
