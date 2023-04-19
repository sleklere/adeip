import { useRouteError } from "react-router-dom";
import Header from "../Components/Header";
import styles from "./Error.module.css";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <Header />
      <main className={styles["error-content"]}>
        <h1>¡Vaya! Algo salió mal.</h1>
        <p>
          <span>{error.status} </span>
          {error.statusText}
        </p>
      </main>
    </>
  );
}

export default ErrorPage;
