import styles from "./Footer.module.css";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-part-one"]}>
        <h2>A.D.E.I.P.</h2>
        <p>
          Asociación Civil Personería <br /> Jurídica Nº 16.917
        </p>
      </div>
      <div className={styles["footer-part-two"]}>
        <h3>Miembro de</h3>
        <p>International Test Commission (ITC)</p>
        <p>Rorschach Society</p>
      </div>
      <div className={styles["footer-part-three"]}>
        <h3>Sede central</h3>
        <div className={styles["info-icon-footer"]}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles["icon-footer"]}
          />
          <p>Rioja 1037 - Piso 4 Rosario, Argentina</p>
        </div>
        <div className={styles["info-icon-footer"]}>
          <FontAwesomeIcon icon={faPhone} className={styles["icon-footer"]} />
          <a href="tel: (0341) 424-0013">(0341) 424-0013</a>
        </div>
        <div className={styles["info-icon-footer"]}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles["icon-footer"]}
          />
          <a href="mailTo: adeipsedenacional@gmail.com">
            adeipsedenacional@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
