import PageLayoutTop from "../Components/PageLayoutTop";
import Card from "../Components/PublicationsCard";
import styles from "./Publicaciones.module.css";
import backgroundImage from "../Assets/page-layout-top.jpg";
import cardImg30 from "../Assets/publicaciones/PSICODIAGNOSTICAR-30.png";
import cardImg29 from "../Assets/publicaciones/PSICODIAGNOSTICAR-29.png";
import cardImg28 from "../Assets/publicaciones/PSICODIAGNOSTICAR-28.png";

function Publicaciones() {
  return (
    <>
      <PageLayoutTop title={"PUBLICACIONES"} image={backgroundImage} />
      <div className={styles.cards}>
        <Card
          cardImg={cardImg30}
          title={"PSICODIAGNOSTICAR 30"}
          pdf={process.env.PUBLIC_URL + "/PSICODIAGNOSTICAR-30.pdf"}
        />
        <Card
          cardImg={cardImg29}
          title={"PSICODIAGNOSTICAR 29"}
          pdf={process.env.PUBLIC_URL + "/PSICODIAGNOSTICAR-29.pdf"}
        />
        <Card
          cardImg={cardImg28}
          title={"PSICODIAGNOSTICAR 28"}
          pdf={process.env.PUBLIC_URL + "/PSICODIAGNOSTICAR-28.pdf"}
        />
      </div>
    </>
  );
}

export default Publicaciones;
