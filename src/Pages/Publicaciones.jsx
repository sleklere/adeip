import PageLayoutTop from "../Components/PageLayoutTop";
import Card from "../Components/PublicationsCard";
import styles from "./Publicaciones.module.css";
import backgroundImage from "../Assets/page-layout-top.jpg";
import cardImg from "../Assets/publicaciones/brave_iM2sQbAyVY.png";

function Publicaciones() {
  return (
    <>
      <PageLayoutTop title={"PUBLICACIONES"} image={backgroundImage} />
      <div className={styles.cards}>
        <Card
          cardImg={cardImg}
          title={"PSICODIAGNOSTICAR 30"}
          pdf={process.env.PUBLIC_URL + "/PSICODIAGNOSTICAR-30.pdf"}
        />
      </div>
    </>
  );
}

export default Publicaciones;
