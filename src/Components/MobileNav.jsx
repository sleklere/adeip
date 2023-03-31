import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import styles from "./MobileNav.module.css";
import navLinkFn from "../Utils/navLinkFunction";
import { CSSTransition } from "react-transition-group";

import navBg from "../Assets/polygon-bg-3.jpg";
// import MobileNavDropdown from "./MobileNavDropdown";
import { useRef, useState } from "react";

function MobileNav(props) {
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        {
          <FontAwesomeIcon
            icon={faClose}
            onClick={props.onMenuClose}
            className={styles["menu-close"]}
          />
        }
      </div>
      <nav>
        <ul className={styles["mobile-nav"]}>
          <li>
            <NavLink to={"/"} className={navLinkFn}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/sobre-adeip"}
              className={navLinkFn}
              onClick={props.onMenuClose}
            >
              Sobre ADEIP
            </NavLink>
            <CSSTransition
              nodeRef={nodeRef2}
              // mountOnEnter
              // unmountOnExit
              classNames="rotate-arrow"
              in={dropdownOpen}
              timeout={200}
            >
              <FontAwesomeIcon
                ref={nodeRef2}
                icon={faChevronRight}
                className={styles["dropdown-arrow"]}
                onClick={() => setDropdownOpen((prevState) => !prevState)}
              />
            </CSSTransition>
            {/* {dropdownOpen && <MobileNavDropdown />} */}
            <CSSTransition
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
              classNames="fade-slide"
              in={dropdownOpen}
              timeout={200}
            >
              <ul className={styles["sub-links"]} ref={nodeRef}>
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
              {/* <MobileNavDropdown ref={nodeRef} /> */}
              {/* <h2 ref={nodeRef}>ANIMATION</h2> */}
            </CSSTransition>
          </li>
          <li>
            <NavLink
              to={"/actividades-academicas"}
              className={navLinkFn}
              onClick={props.onMenuClose}
            >
              Actividades Académicas
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/publicaciones"}
              className={navLinkFn}
              onClick={props.onMenuClose}
            >
              Publicaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/biblioteca"}
              className={navLinkFn}
              onClick={props.onMenuClose}
            >
              Biblioteca
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contacto"}
              className={navLinkFn}
              onClick={props.onMenuClose}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
      <img src={navBg} alt={"Mobile navigation background"} />
    </div>
  );
}

export default MobileNav;
