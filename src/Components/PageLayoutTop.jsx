import { Outlet } from "react-router-dom";
import styles from "./PageLayoutTop.module.css";
import bgImage from "../Assets/page-layout-top.jpg";

function PageLayoutTop(props) {
  return (
    <div className={styles["container"]}>
      <div
        className={styles["titulo"]}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${
            props.image || bgImage
          })`,
        }}
      >
        <h1 className={props.titleLarge && styles["title-large"]}>
          {props.title}
        </h1>
        {props.secondaryTitle && (
          <h2 className={styles["secondary-title"]}>{props.secondaryTitle}</h2>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default PageLayoutTop;
