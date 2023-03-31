import { NavLink } from "react-router-dom";
import navLinkFn from "../Utils/navLinkFunction";

import styles from "./MobileNavDropdown.module.css";

function MobileNavDropdown(props) {
  return (
    <ul className={styles["sub-links"]}>
      <li>
        <NavLink
          to={"/consejo-directivo"}
          className={navLinkFn}
          onClick={props.onMenuClose}
        >
          Consejo Directivo
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/formulario-miembro"}
          className={navLinkFn}
          onClick={props.onMenuClose}
        >
          Afiliese a ADEIP
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileNavDropdown;
