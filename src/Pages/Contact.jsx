import { useRef, useState } from "react";
import PageLayoutTop from "../Components/PageLayoutTop";
import useInputValidation from "../Hooks/useInputValidation";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { Transition } from "react-transition-group";
import ToastForm from "../Components/ToastForm";

function Contact() {
  const formRef = useRef();
  const nodeRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState("");
  const [toastContent, setToastContent] = useState("");
  const closeToast = () => setShowToast(false);

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
  } = useInputValidation((value) => regularExpressions.name.test(value));

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInputValidation((value) => regularExpressions.email.test(value));

  const {
    value: topicValue,
    isValid: topicIsValid,
    hasError: topicHasError,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
  } = useInputValidation((value) => value !== "");

  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
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

    //From this point the form is validated and ready to be sent or else.

    // For testing only
    // setToastContent("Formulario enviado!");
    // setToastColor("var(--confirmation-color)");
    // setShowToast(true);
    // setTimeout(() => setShowToast(false), 5000);

    // Sending the email
    emailjs
      .sendForm(
        "service_c06mxxs",
        "template_sf7m15x",
        formRef.current,
        "uSmUolwAYwC88M8dh"
      )
      .then((result) => {
        console.log(result, result.text);
        setToastContent("Formulario enviado!");
        setToastColor("var(--confirmation-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      })
      .catch((err) => {
        console.log(err.text);
        setToastContent("Algo salió mal.");
        setToastColor("var(--accent-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  // Validacion classes
  const nameClassInput = nameHasError ? `${styles["input-invalid"]}` : "";
  const emailClassInput = emailHasError ? `${styles["input-invalid"]}` : "";
  const topicClassInput = topicHasError ? `${styles["input-invalid"]}` : "";
  const messageClassInput = messageHasError ? `${styles["input-invalid"]}` : "";

  return (
    <>
      <Transition in={showToast} timeout={200} nodeRef={nodeRef}>
        {(state) => (
          <ToastForm
            closeFn={closeToast}
            transitionState={state}
            bgColor={toastColor}
            content={toastContent}
          />
        )}
      </Transition>
      <PageLayoutTop title={"CONTACTO"} />
      <form ref={formRef} className={styles.form} onSubmit={submitHandler}>
        <label>
          Su nombre *
          <input
            type="text"
            id="name"
            name="user_name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={nameClassInput}
          />
          {nameHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Su E-mail *
          <input
            type="email"
            id="email"
            name="user_email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailClassInput}
          />
          {emailHasError && (
            <p className={styles["p-invalid"]}>Debe ser un e-mail válido.</p>
          )}
        </label>
        <label>
          Tema/Asunto *
          <input
            type="text"
            id="topic"
            name="topic"
            value={topicValue}
            onChange={topicChangeHandler}
            onBlur={topicBlurHandler}
            className={topicClassInput}
          />
          {topicHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Mensaje *
          <textarea
            id="message"
            name="message"
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
