import { NavLink } from "react-router-dom";
import navLinkFn from "../Utils/navLinkFunction";

import styles from "./HeaderDropdown.module.css";

function HeaderDropdown(props) {
  const classes = [
    styles["dropdown-menu"],
    props.show === "entering"
      ? styles["dropdown-open"]
      : props.show === "exiting"
      ? styles["dropdown-closed"]
      : null,
  ];

  return (
    <ul
      ref={props.transitionRef}
      className={classes.join(" ")}
      onMouseEnter={props.openMenu}
      onMouseLeave={props.closeMenu}
    >
      <NavLink
        to={"/consejo-directivo"}
        className={navLinkFn}
        onClick={props.onMenuClose}
      >
        Consejo Directivo
      </NavLink>

      <NavLink
        to={"/formulario-miembro"}
        className={navLinkFn}
        onClick={props.onMenuClose}
      >
        Asóciese a ADEIP
      </NavLink>

      <NavLink
        to={"/congresos"}
        className={navLinkFn}
        onClick={props.onMenuClose}
      >
        Congresos
      </NavLink>
    </ul>
  );
}

export default HeaderDropdown;
