import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, Transition } from "react-transition-group";
import HeaderDropdown from "./HeaderDropdown";
import navLinkFn from "../Utils/navLinkFunction";
import styles from "./HeaderNav.module.css";

function HeaderNav() {
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <nav>
      <ul className={styles["header-nav-list"]}>
        <NavLink to={"/"} className={navLinkFn}>
          Inicio
        </NavLink>
        <span>|</span>
        <li
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={styles["li-dropdown"]}
        >
          Sobre ADEIP{" "}
          <CSSTransition
            nodeRef={nodeRef2}
            classNames="rotate-arrow"
            in={isDropdownOpen}
            timeout={200}
          >
            <FontAwesomeIcon
              ref={nodeRef2}
              icon={faChevronRight}
              className={styles["chevron-down"]}
              onClick={() => setIsDropdownOpen((prevState) => !prevState)}
            />
          </CSSTransition>
          <Transition
            nodeRef={nodeRef}
            mountOnEnter
            unmountOnExit
            in={isDropdownOpen}
            timeout={200}
          >
            {(state) => (
              <HeaderDropdown
                transitionRef={nodeRef}
                show={state}
                openMenu={openDropdown}
              />
            )}
          </Transition>
          <span>|</span>
        </li>
        <NavLink to={"/actividades-academicas"} className={navLinkFn}>
          Actividades Académicas
        </NavLink>
        <span>|</span>
        <NavLink to={"/publicaciones"} className={navLinkFn}>
          Publicaciones
        </NavLink>
        <span>|</span>
        <NavLink to={"/biblioteca"} className={navLinkFn}>
          Biblioteca
        </NavLink>
        <span>|</span>
        <NavLink to={"/contacto"} className={navLinkFn}>
          Contacto
        </NavLink>
      </ul>
    </nav>
  );
}

export default HeaderNav;
