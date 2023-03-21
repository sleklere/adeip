import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.header}>
      <Link to={"/"} className={styles["header-title"]}>
        A.D.E.I.P
      </Link>
      <FontAwesomeIcon
        icon={faBars}
        className={styles["burger-button"]}
        onClick={props.onMenuClick}
      />

      <ul className={styles["header-nav"]}>
        <li>
          <NavLink
            to={"/sobre-adeip"}
            className={({ isActive, isPending }) =>
              isPending
                ? "nav-link--pending"
                : isActive
                ? "nav-link--active"
                : "nav-link"
            }
          >
            Sobre ADEIP
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink
            to={"/actividades-academicas"}
            className={({ isActive, isPending }) =>
              isPending
                ? "nav-link--pending"
                : isActive
                ? "nav-link--active"
                : "nav-link"
            }
          >
            Actividades Académicas
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink
            to={"/publicaciones"}
            className={({ isActive, isPending }) =>
              isPending
                ? "nav-link--pending"
                : isActive
                ? "nav-link--active"
                : "nav-link"
            }
          >
            Publicaciones
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink
            to={"/biblioteca"}
            className={({ isActive, isPending }) =>
              isPending
                ? "nav-link--pending"
                : isActive
                ? "nav-link--active"
                : "nav-link"
            }
          >
            Biblioteca
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink
            to={"/contacto"}
            className={({ isActive, isPending }) =>
              isPending
                ? "nav-link--pending"
                : isActive
                ? "nav-link--active"
                : "nav-link"
            }
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
