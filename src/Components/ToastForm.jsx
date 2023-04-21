import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ToastForm.module.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function ToastForm(props) {
  return (
    <div
      className={[
        styles["toast"],
        props.transitionState === "entering"
          ? styles["toast-show"]
          : props.transitionState === "entered"
          ? styles["toast-showing"]
          : props.transitionState === "exiting"
          ? styles["toast-closed"]
          : null,
      ].join(" ")}
      style={{ backgroundColor: props.bgColor }}
    >
      <p>{props.content}</p>
      <FontAwesomeIcon
        icon={faClose}
        className={styles["toast-close"]}
        onClick={props.closeFn}
      />
    </div>
  );
}

export default ToastForm;
