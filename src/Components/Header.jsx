import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

function Header(props) {
  return (
    <div className={styles.header}>
      <Link to={"/"} className={styles["header-title"]}>
        A.D.E.I.P
      </Link>
      <HeaderNav />
      <FontAwesomeIcon
        icon={faBars}
        className={styles["burger-button"]}
        onClick={props.onMenuClick}
      />
    </div>
  );
}

export default Header;
