import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, Transition } from "react-transition-group";
import navLinkFn from "../Utils/navLinkFunction";
import HeaderDropdown from "./HeaderDropdown";

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
        {/* <li> */}
        <NavLink to={"/"} className={navLinkFn}>
          Inicio
        </NavLink>
        {/* </li> */}
        <span>|</span>
        <li
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          className={styles["li-dropdown"]}
        >
          {/* <Link to={"#"} className={navLinkFn}> */}
          Sobre ADEIP{" "}
          {/* <FontAwesomeIcon
              icon={faChevronDown}
              className={styles["chevron-down"]}
            /> */}
          <CSSTransition
            nodeRef={nodeRef2}
            // mountOnEnter
            // unmountOnExit
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
          {/* </Link> */}
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
                // closeMenu={closeDropdown}
              />
            )}
          </Transition>
          <span>|</span>
        </li>
        {/* <li> */}
        <NavLink to={"/actividades-academicas"} className={navLinkFn}>
          Actividades Académicas
        </NavLink>
        {/* </li> */}
        <span>|</span>
        {/* <li> */}
        <NavLink to={"/publicaciones"} className={navLinkFn}>
          Publicaciones
        </NavLink>
        {/* </li> */}
        <span>|</span>
        {/* <li> */}
        <NavLink to={"/biblioteca"} className={navLinkFn}>
          Biblioteca
        </NavLink>
        {/* </li> */}
        <span>|</span>
        {/* <li> */}
        <NavLink to={"/contacto"} className={navLinkFn}>
          Contacto
        </NavLink>
        {/* </li> */}
      </ul>
    </nav>
  );
}

export default HeaderNav;
