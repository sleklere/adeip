import PageLayoutTop from "../Components/PageLayoutTop";
import useInputValidation from "../Hooks/useInputValidation";
import styles from "./Contact.module.css";

function Contact() {
  const regularExpressions = {
    name: /^[a-zA-ZÁ-ÿ\s]{2,100}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  // Validacion inputs
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInputValidation((value) => regularExpressions.name.test(value));

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputValidation((value) => regularExpressions.email.test(value));

  const {
    value: topicValue,
    isValid: topicIsValid,
    hasError: topicHasError,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    reset: resetTopic,
  } = useInputValidation((value) => value !== "");

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInputValidation((value) => value !== "");

  // Validacion form
  let formIsValid = false;

  if (nameIsValid && emailIsValid && topicIsValid && messageIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    //Aca pongo lo que quiera hacer con la info del form
  };

  // Validacion classes
  const nameClassInput = nameHasError ? `${styles["input-invalid"]}` : "";
  const nameClassLabel = nameHasError ? `${styles["label-invalid"]}` : "";
  const emailClassInput = emailHasError ? `${styles["input-invalid"]}` : "";
  const emailClassLabel = emailHasError ? `${styles["label-invalid"]}` : "";
  const topicClassInput = topicHasError ? `${styles["input-invalid"]}` : "";
  const topicClassLabel = topicHasError ? `${styles["label-invalid"]}` : "";
  const messageClassInput = messageHasError ? `${styles["input-invalid"]}` : "";
  const messageClassLabel = messageHasError ? `${styles["label-invalid"]}` : "";

  return (
    <>
      <PageLayoutTop title={"CONTACTO"} />
      <form className={styles.form} onSubmit={submitHandler}>
        <label className={nameClassLabel}>
          Su nombre *
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={nameClassInput}
          />
          {nameHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label className={emailClassLabel}>
          Su E-mail *
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailClassInput}
          />
          {emailHasError && (
            <p className={styles["p-invalid"]}>Debe ser un e-mail válido.</p>
          )}
        </label>
        <label className={topicClassLabel}>
          Tema/Asunto *
          <input
            type="text"
            id="topic"
            value={topicValue}
            onChange={topicChangeHandler}
            onBlur={topicBlurHandler}
            className={topicClassInput}
          />
          {topicHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label className={messageClassLabel}>
          Mensaje *
          <textarea
            id="message"
            value={messageValue}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            className={messageClassInput}
          />
          {messageHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <button disabled={!formIsValid}>ENVIAR MENSAJE</button>
      </form>
    </>
  );
}

export default Contact;
