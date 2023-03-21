import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import styles from "./MobileNav.module.css";

function MobileNav(props) {
  return (
    <div className={styles.container}>
      <div className={styles["layout-top"]}>
        <Link
          to={"/"}
          className={styles["nav-title"]}
          onClick={props.onMenuClose}
        >
          A.D.E.I.P
        </Link>
        <FontAwesomeIcon
          icon={faClose}
          onClick={props.onMenuClose}
          className={styles["menu-close"]}
        />
      </div>
      <ul className={styles["mobile-nav"]}>
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
            onClick={props.onMenuClose}
          >
            Sobre ADEIP
          </NavLink>
        </li>
        <span />
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
            onClick={props.onMenuClose}
          >
            Actividades Académicas
          </NavLink>
        </li>
        <span />
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
            onClick={props.onMenuClose}
          >
            Publicaciones
          </NavLink>
        </li>
        <span />
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
            onClick={props.onMenuClose}
          >
            Biblioteca
          </NavLink>
        </li>
        <span />
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
            onClick={props.onMenuClose}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      {/* <button className={styles["contact-btn"]}>
        <NavLink
          to={"/contacto"}
          className={({ isActive, isPending }) =>
            isPending
              ? "nav-link-btn--pending"
              : isActive
              ? "nav-link-btn--active"
              : "nav-link-btn"
          }
          onClick={props.onMenuClose}
        >
          Contacto
        </NavLink>
      </button> */}
    </div>
  );
}

export default MobileNav;
