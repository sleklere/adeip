import PageLayoutTop from "../Components/PageLayoutTop";
import Card from "../Components/PublicationsCard";
import styles from "./Publicaciones.module.css";
import backgroundImage from "../Assets/page-layout-top.jpg";
import cardImg30 from "../Assets/publicaciones/PSICODIAGNOSTICAR-30.png";
import cardImg29 from "../Assets/publicaciones/PSICODIAGNOSTICAR-29.png";
import cardImg28 from "../Assets/publicaciones/PSICODIAGNOSTICAR-28.png";
import cardImgBoletin22 from "../Assets/publicaciones/BoletinADEIP2022.jpeg";
import cardImgBoletin23 from "../Assets/publicaciones/BoletinADEIP2023.jpeg";

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
      <div className={styles["boletines-h2-container"]}>
        <h2 className={styles["boletines-h2"]}>Boletines</h2>
      </div>
      <div className={styles.cards}>
        <Card
          cardImg={cardImgBoletin22}
          title={"Boletín ADEIP 2022"}
          pdf={process.env.PUBLIC_URL + "/BoletinADEIP2022.pdf"}
        />
        <Card
          cardImg={cardImgBoletin23}
          title={"Boletín ADEIP 2023"}
          pdf={process.env.PUBLIC_URL + "/BoletinADEIP2023.pdf"}
        />
      </div>
    </>
  );
}

export default Publicaciones;
