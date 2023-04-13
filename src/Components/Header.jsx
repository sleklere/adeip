import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles.header}>
      <Link to={"/"} className={styles["header-title"]}>
        ADEIP
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
