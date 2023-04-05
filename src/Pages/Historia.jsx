import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/page-layout-top.jpg";
import styles from "./Historia.module.css";
import { Link } from "react-router-dom";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Historia() {
  return (
    <>
      <PageLayoutTop title={"Historia de ADEIP"} image={backgroundImage} />
      <div className={styles["historia-container"]}>
        <p>
          ADEIP nació a partir de la intención de un grupo de psicólogos
          dedicados al psicodiagnóstico, que concebían la necesidad de generar
          una institución de alcance nacional y de carácter federal, que
          representase la actividad psicodiagnosticadora en todas las áreas de
          aplicación sin exclusión de tendencias técnicas y bases teóricas.
        </p>
        <p>
          Los propulsores originales fueron Elizabeth Sorribas y Fernando
          Sílberstein; este último fue quien formuló la propuesta de la
          fundación durante las Jornadas de la Asociación de Rorschach de
          Rosario, en <strong>1987</strong>:
        </p>
        <div className={styles["quotes-container"]}>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className={styles["quotes-container-icon"]}
          />
          <p>
            “Si queremos que el Psicodiagnóstico se extienda, sea conocido,
            respetado, y se profundicen las investigaciones, debemos dejar de
            lado las distancias y generar una Institución auténticamente
            representativa del movimiento psicodiagnostista de todo el país, que
            lidere los grupos actuales y - esperamos- los futuros."
          </p>
          <p>
            "Por eso yo propongo la creación de una Sociedad Nacional de
            Psicodiagnóstico que trabaje para promover el conocimiento y la
            utilización de las distintas técnicas en todo el país, que las
            difunda externa e internamente, que promueva, apoye y estimule la
            investigación con jornadas periódicas, publicaciones, banco de
            datos, comisiones de estudio y que defienda con reclamos pertinentes
            los intereses gremiales de los psicodiagnosticadores de todo el
            país.”
          </p>
        </div>
        <p>
          La idea tuvo una aceptación fervorosa por parte de psicólogos de los
          más diversos puntos del país, y luego de un trabajo preparatorio que
          se realizó en varias reuniones presenciales (aún no había comunicación
          electrónica, ni whatsapp), llegó el momento de firmar el Acta de
          Fundación, el 18 de septiembre de <strong>1988</strong>. La fundación
          se produjo en Tucumán, y poco tiempo después se logró establecer la
          Personería Jurídica.
        </p>
        <p>
          Se comenzaron a realizar Jornadas Nacionales anuales, a generar
          delegaciones en distintas provincias y a sostener intercambios según
          el interés de los socios. Dado el desarrollo que adquirieron las
          Jornadas, a partir de <strong>1997</strong> se convirtieron en
          Congresos Nacionales de Psicodiagnóstico (ver {""}
          <Link to="/congresos" className={styles["historia-link-congresos"]}>
            Congresos
          </Link>
          ).
        </p>
        <p>
          En <strong>1991</strong> ADEIP comenzó a publicar además de los
          Boletines cuatrimestrales, la Revista Anual “Psicodiagnosticar”. Más
          adelante, se asoció a la International Rorschach Society, la cual es
          presidida en la actualidad por Fernando Silberstein.
        </p>
        <p>
          La primera Presidente de ADEIP fue Elizabeth Sorribas, y desde
          entonces se han sucedido diversas presidencias, que realizaron aportes
          desde sus enfoques singulares al desarrollo de la Asociación. Los
          Convenios realizados con universidades e instituciones diversas
          ampliaron la posibilidad de realizar los Propósitos institucionales de
          la Asociación, que ha seguido creciendo en reconocimiento y producción
          científica a través de épocas a veces adversas, como la pandemia de
          COVID que se inició en 2019 y determinó una interrupción temporaria de
          los Congresos y de la publicación de la revista anual.
        </p>
        <p>
          Actualmente ADEIP está en plena actividad, difundiendo, transmitiendo
          las técnicas, defendiendo los principios éticos y los intereses
          gremiales de los psicodiagnosticadores, y es una institución de
          consulta en las situaciones problemáticas conectadas al
          psicodiagnóstico. Deseamos que los colegas dedicados a la evaluación
          psicológica en todas sus vertientes se sumen, desde todas las regiones
          del país, a la tarea de promover la excelencia, la difusión y la
          investigación de los temas nuevos que nos desafían.
        </p>
      </div>
    </>
  );
}

export default Historia;
