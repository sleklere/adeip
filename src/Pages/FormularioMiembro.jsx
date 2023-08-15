import PageLayoutTop from "../Components/PageLayoutTop";
import useInputValidation from "../Hooks/useInputValidation";
import emailjs from "@emailjs/browser";
import styles from "./FormularioMiembro.module.css";
import { useRef, useState } from "react";
import ToastForm from "../Components/ToastForm";
import { Transition } from "react-transition-group";

function FormularioMiembro() {
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
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInputValidation((value) => regularExpressions.name.test(value));
  const {
    value: enteredDni,
    isValid: dniIsValid,
    hasError: dniHasError,
    valueChangeHandler: dniChangeHandler,
    inputBlurHandler: dniBlurHandler,
    reset: resetDni,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCuit,
    isValid: cuitIsValid,
    hasError: cuitHasError,
    valueChangeHandler: cuitChangeHandler,
    inputBlurHandler: cuitBlurHandler,
    reset: resetCuit,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredDirec,
    isValid: direcIsValid,
    hasError: direcHasError,
    valueChangeHandler: direcChangeHandler,
    inputBlurHandler: direcBlurHandler,
    reset: resetDirec,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCode,
    isValid: codeIsValid,
    hasError: codeHasError,
    valueChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
    reset: resetCode,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCountry,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: resetCountry,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredTel,
    isValid: telIsValid,
    hasError: telHasError,
    valueChangeHandler: telChangeHandler,
    inputBlurHandler: telBlurHandler,
    reset: resetTel,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputValidation((value) => regularExpressions.email.test(value));
  const {
    value: enteredTitulo,
    isValid: tituloIsValid,
    hasError: tituloHasError,
    valueChangeHandler: tituloChangeHandler,
    inputBlurHandler: tituloBlurHandler,
    reset: resetTitulo,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredExp,
    isValid: expIsValid,
    hasError: expHasError,
    valueChangeHandler: expChangeHandler,
    inputBlurHandler: expBlurHandler,
    reset: resetExp,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredGrad,
    isValid: gradIsValid,
    hasError: gradHasError,
    valueChangeHandler: gradChangeHandler,
    inputBlurHandler: gradBlurHandler,
    reset: resetGrad,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredAct,
    isValid: actIsValid,
    hasError: actHasError,
    valueChangeHandler: actChangeHandler,
    inputBlurHandler: actBlurHandler,
    reset: resetAct,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredWork,
    isValid: workIsValid,
    hasError: workHasError,
    valueChangeHandler: workChangeHandler,
    inputBlurHandler: workBlurHandler,
    reset: resetWork,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredInsc,
    isValid: inscIsValid,
    hasError: inscHasError,
    valueChangeHandler: inscChangeHandler,
    inputBlurHandler: inscBlurHandler,
    reset: resetInsc,
  } = useInputValidation((value) => value !== "");

  // Validacion form
  let formIsValid = false;

  if (
    nameIsValid &&
    dniIsValid &&
    cuitIsValid &&
    direcIsValid &&
    cityIsValid &&
    codeIsValid &&
    countryIsValid &&
    telIsValid &&
    emailIsValid &&
    tituloIsValid &&
    expIsValid &&
    gradIsValid &&
    actIsValid &&
    workIsValid &&
    inscIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    //From this point the form is validated and ready to be sent or else.
    emailjs
      .sendForm(
        "service_vxdyvbb",
        "template_tuoxxvi",
        formRef.current,
        "9rHxPlKgX22r13JLO"
      )
      .then((result) => {
        console.log(result, result.text);
        setToastContent("Formulario enviado!");
        setToastColor("var(--confirmation-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        // Resetting all values to ""
        resetName();
        resetDni();
        resetCuit();
        resetDirec();
        resetCity();
        resetCode();
        resetCountry();
        resetTel();
        resetEmail();
        resetTitulo();
        resetExp();
        resetGrad();
        resetAct();
        resetWork();
        resetInsc();
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
  const dniClassInput = dniHasError ? `${styles["input-invalid"]}` : "";
  const cuitClassInput = cuitHasError ? `${styles["input-invalid"]}` : "";
  const direcClassInput = direcHasError ? `${styles["input-invalid"]}` : "";
  const cityClassInput = cityHasError ? `${styles["input-invalid"]}` : "";
  const codeClassInput = codeHasError ? `${styles["input-invalid"]}` : "";
  const countryClassInput = countryHasError ? `${styles["input-invalid"]}` : "";
  const telClassInput = telHasError ? `${styles["input-invalid"]}` : "";
  const emailClassInput = emailHasError ? `${styles["input-invalid"]}` : "";
  const tituloClassInput = tituloHasError ? `${styles["input-invalid"]}` : "";
  const expClassInput = expHasError ? `${styles["input-invalid"]}` : "";
  const gradClassInput = gradHasError ? `${styles["input-invalid"]}` : "";
  const actClassInput = actHasError ? `${styles["input-invalid"]}` : "";
  const workClassInput = workHasError ? `${styles["input-invalid"]}` : "";
  const inscClassInput = inscHasError ? `${styles["input-invalid"]}` : "";

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
      <PageLayoutTop title={"SOLICITUD DE INGRESO COMO MIEMBRO"} />
      <form ref={formRef} className={styles.form} onSubmit={submitHandler}>
        <label>
          Apellido y Nombre *
          <input
            type="text"
            name="apellido--nombre"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            className={nameClassInput}
          />
          {nameHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          N° y tipo de documento *
          <input
            type="text"
            name="documento--tipo"
            value={enteredDni}
            onChange={dniChangeHandler}
            onBlur={dniBlurHandler}
            className={dniClassInput}
          />
          {dniHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          N° CUIT o CUIL *
          <input
            type="number"
            name="cuit-cuil"
            value={enteredCuit}
            onChange={cuitChangeHandler}
            onBlur={cuitBlurHandler}
            className={cuitClassInput}
          />
          {cuitHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Dirección *
          <input
            type="text"
            name="direccion"
            value={enteredDirec}
            onChange={direcChangeHandler}
            onBlur={direcBlurHandler}
            className={direcClassInput}
          />
          {direcHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Ciudad/Provincia *
          <input
            type="text"
            name="ciudad--provincia"
            value={enteredCity}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            className={cityClassInput}
          />
          {cityHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Código Postal *
          <input
            type="number"
            name="codigo-postal"
            value={enteredCode}
            onChange={codeChangeHandler}
            onBlur={codeBlurHandler}
            className={codeClassInput}
          />
          {codeHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          País *
          <input
            type="text"
            name="pais"
            value={enteredCountry}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            className={countryClassInput}
          />
          {countryHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Teléfono *
          <input
            type="number"
            name="telefono"
            value={enteredTel}
            onChange={telChangeHandler}
            onBlur={telBlurHandler}
            className={telClassInput}
          />
          {telHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          E-mail *
          <input
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailClassInput}
          />
          {emailHasError && (
            <p className={styles["p-invalid"]}>
              Este campo es obligatorio y debe ser un e-mail válido.
            </p>
          )}
        </label>
        <label>
          Título *
          <select
            value={enteredTitulo}
            onChange={tituloChangeHandler}
            onBlur={tituloBlurHandler}
            className={tituloClassInput}
            name="titulo"
          >
            <option value="">Seleccione una opción:</option>
            <option value="psicologo">Psicólogo</option>
            <option value="licenciado-psicologia">
              Licenciado en Psicología
            </option>
          </select>
          {tituloHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Expedido por *
          <input
            type="text"
            name="titulo-expedido-por"
            value={enteredExp}
            onChange={expChangeHandler}
            onBlur={expBlurHandler}
            className={expClassInput}
          />
          {expHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Fecha de Graduación *
          <input
            type="date"
            name="fecha-graduacion"
            value={enteredGrad}
            onChange={gradChangeHandler}
            onBlur={gradBlurHandler}
            className={gradClassInput}
          />
          {gradHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Actividad *
          <textarea
            name="actividad"
            value={enteredAct}
            onChange={actChangeHandler}
            onBlur={actBlurHandler}
            className={actClassInput}
          />
          {actHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Institución/es en la/s que trabaja *
          <textarea
            name="instituciones"
            value={enteredWork}
            onChange={workChangeHandler}
            onBlur={workBlurHandler}
            className={workClassInput}
          />
          {workHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Fecha de inscripción *
          <input
            type="date"
            name="fecha-inscripcion"
            value={enteredInsc}
            onChange={inscChangeHandler}
            onBlur={inscBlurHandler}
            className={inscClassInput}
          />
          {inscHasError && (
            <p className={styles["p-invalid"]}>Este campo es obligatorio.</p>
          )}
        </label>
        <p>Miembros que lo/la pueden presentar:</p>
        <label>
          Apellido y Nombre *
          <input type="text" name="miembro-1" />
        </label>
        <label>
          Apellido y Nombre *
          <input type="text" name="miembro-2" />
        </label>

        <button disabled={!formIsValid}>ENVIAR FORMULARIO</button>
      </form>
    </>
  );
}

export default FormularioMiembro;
