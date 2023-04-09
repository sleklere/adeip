import { NavLink } from "react-router-dom";
import navLinkFn from "../Utils/navLinkFunction";

import styles from "./MobileNavDropdown.module.css";

function MobileNavDropdown(props) {
  const classes = [
    styles["dropdown-menu"],
    props.show === "entering"
      ? styles["dropdown-open"]
      : props.show === "entered"
      ? styles["dropdown-opened"]
      : props.show === "exiting"
      ? styles["dropdown-closed"]
      : null,
  ];

  return (
    <ul className={classes.join(" ")} ref={props.transitionRef}>
      <li>
        <NavLink
          to={"/sobre-adeip"}
          className={navLinkFn}
          onClick={props.onMenuClose}
        >
          Acerca de
        </NavLink>
      </li>
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
      <li>
        <NavLink
          to={"/congresos"}
          className={navLinkFn}
          onClick={props.onMenuClose}
        >
          Congresos
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/historia"}
          className={navLinkFn}
          onClick={props.onMenuClose}
        >
          Historia
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileNavDropdown;
