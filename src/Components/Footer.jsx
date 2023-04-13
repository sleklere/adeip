import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-part-one"]}>
        <h2>ADEIP</h2>
        <p>
          Asociación Civil Personería <br /> Jurídica Nº 16.917
        </p>
      </div>
      <div className={styles["footer-part-two"]}>
        <h3>Miembro de</h3>
        <div className={styles["footer-part-two-members"]}>
          <p className={styles["first-p-part-one"]}>
            <a
              href="https://www.intestcom.org/"
              target="_blank"
              rel="noreferrer"
              className={styles["member-of-link"]}
            >
              International Test <br />
              Commission (ITC)
            </a>
          </p>
          <p className={styles["second-p-part-two"]}>
            <a
              href="https://www.internationalrorschachsociety.com/"
              target="_blank"
              rel="noreferrer"
              className={styles["member-of-link"]}
            >
              Rorschach Society
            </a>{" "}
          </p>
        </div>
      </div>
      <div className={styles["footer-part-three"]}>
        <h3>Sede central</h3>
        <div
          className={`${styles["info-icon-footer"]} ${styles["info1-icon-footer"]}`}
        >
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles["icon-footer"]}
          />
          <a
            href="https://www.google.com/maps/place/AyM,+Rioja+1037,+S2000+Rosario,+Santa+Fe/@-32.9479359,-60.6424489,17z/data=!3m1!4b1!4m6!3m5!1s0x95b7ab1980b54531:0x9e12c2b7c8c841a2!8m2!3d-32.9479405!4d-60.637578!16s%2Fg%2F11cskq5jcd"
            target="_blank"
            rel="noreferrer"
          >
            Rioja 1037 - Piso 4 Rosario, Argentina
          </a>
        </div>
        <div
          className={`${styles["info-icon-footer"]} ${styles["info2-icon-footer"]}`}
        >
          <FontAwesomeIcon icon={faPhone} className={styles["icon-footer"]} />
          <a href="tel: (0341) 424-0013">(0341) 424-0013</a>
        </div>
        <div
          className={`${styles["info-icon-footer"]} ${styles["info3-icon-footer"]}`}
        >
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
