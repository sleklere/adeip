import { Outlet } from "react-router-dom";
import styles from "./PageLayoutTop.module.css";

import bgImage from "../Assets/home-4.jpg";

function PageLayoutTop(props) {
  return (
    <div className={styles["container"]}>
      <div
        className={styles["titulo"]}
        style={{
          // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.image})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${
            props.image || bgImage
          })`,
        }}
      >
        <h1 style={props.titleLarge && { fontSize: "10rem" }}>{props.title}</h1>
        {props.secondaryTitle && (
          <h2 className={styles["secondary-title"]}>{props.secondaryTitle}</h2>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default PageLayoutTop;
