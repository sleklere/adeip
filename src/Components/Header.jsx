import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

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
        <li
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={styles["li-dropdown"]}
        >
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
          {isDropdownOpen && (
            <ul
              className={styles["dropdown-menu"]}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
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
                  onClick={closeDropdown}
                >
                  Sobre ADEIP
                </NavLink>
              </li>
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
                  onClick={closeDropdown}
                >
                  Sobre ADEIP
                </NavLink>
              </li>
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
                  onClick={closeDropdown}
                >
                  Sobre ADEIP
                </NavLink>
              </li>
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
                  onClick={closeDropdown}
                >
                  Sobre ADEIP
                </NavLink>
              </li>
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
                  onClick={closeDropdown}
                >
                  Actividades Académicas
                </NavLink>
              </li>
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
                  onClick={closeDropdown}
                >
                  Publicaciones
                </NavLink>
              </li>
            </ul>
          )}
          <span>|</span>
        </li>
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
