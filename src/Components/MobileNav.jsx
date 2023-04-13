import { faChevronRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { CSSTransition, Transition } from "react-transition-group";
import { useRef, useState } from "react";
import MobileNavDropdown from "./MobileNavDropdown";
import navLinkFn from "../Utils/navLinkFunction";
import styles from "./MobileNav.module.css";

function MobileNav(props) {
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div className={styles["layout-top"]}>
        <Link
          to={"/"}
          className={styles["nav-title"]}
          onClick={props.onMenuClose}
        >
          ADEIP
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
        <Transition nodeRef={nodeRef} in={dropdownOpen} timeout={200}>
          {(state) => (
            <ul
              ref={nodeRef}
              className={[
                styles["mobile-nav"],
                state === "entering"
                  ? styles["mobile-nav-open"]
                  : state === "entered"
                  ? styles["mobile-nav-opened"]
                  : state === "exiting"
                  ? styles["mobile-nav-closed"]
                  : null,
              ].join(" ")}
            >
              <li>
                <NavLink to={"/"} className={navLinkFn}>
                  Inicio
                </NavLink>
              </li>
              <li className={styles["li-dropdown"]} onClick={toggleDropdown}>
                Sobre ADEIP
                <CSSTransition
                  nodeRef={nodeRef2}
                  classNames="rotate-arrow"
                  in={dropdownOpen}
                  timeout={200}
                >
                  <FontAwesomeIcon
                    ref={nodeRef2}
                    icon={faChevronRight}
                    className={styles["dropdown-arrow"]}
                  />
                </CSSTransition>
                <Transition
                  nodeRef={nodeRef}
                  mountOnEnter
                  unmountOnExit
                  in={dropdownOpen}
                  timeout={200}
                >
                  {(state) => (
                    <MobileNavDropdown
                      transitionRef={nodeRef}
                      show={state}
                      onMenuClose={props.onMenuClose}
                    />
                  )}
                </Transition>
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
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default MobileNav;
