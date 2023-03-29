import { Outlet } from "react-router-dom";
import styles from "./PageLayoutTop.module.css";

function PageLayoutTop(props) {
  return (
    <div className={styles["container"]}>
      <div
        className={styles["titulo"]}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image})`,
        }}
      >
        <h1>{props.title}</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default PageLayoutTop;
