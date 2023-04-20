import PageLayoutTop from "../Components/PageLayoutTop";
import useInputValidation from "../Hooks/useInputValidation";
import styles from "./FormularioMiembro.module.css";

function FormularioMiembro() {
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
  } = useInputValidation((value) => regularExpressions.name.test(value));
  const {
    value: enteredDni,
    isValid: dniIsValid,
    hasError: dniHasError,
    valueChangeHandler: dniChangeHandler,
    inputBlurHandler: dniBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCuit,
    isValid: cuitIsValid,
    hasError: cuitHasError,
    valueChangeHandler: cuitChangeHandler,
    inputBlurHandler: cuitBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredDirec,
    isValid: direcIsValid,
    hasError: direcHasError,
    valueChangeHandler: direcChangeHandler,
    inputBlurHandler: direcBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCode,
    isValid: codeIsValid,
    hasError: codeHasError,
    valueChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredCountry,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredTel,
    isValid: telIsValid,
    hasError: telHasError,
    valueChangeHandler: telChangeHandler,
    inputBlurHandler: telBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInputValidation((value) => regularExpressions.email.test(value));
  const {
    value: enteredTitulo,
    isValid: tituloIsValid,
    hasError: tituloHasError,
    valueChangeHandler: tituloChangeHandler,
    inputBlurHandler: tituloBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredExp,
    isValid: expIsValid,
    hasError: expHasError,
    valueChangeHandler: expChangeHandler,
    inputBlurHandler: expBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredGrad,
    isValid: gradIsValid,
    hasError: gradHasError,
    valueChangeHandler: gradChangeHandler,
    inputBlurHandler: gradBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredAct,
    isValid: actIsValid,
    hasError: actHasError,
    valueChangeHandler: actChangeHandler,
    inputBlurHandler: actBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredWork,
    isValid: workIsValid,
    hasError: workHasError,
    valueChangeHandler: workChangeHandler,
    inputBlurHandler: workBlurHandler,
  } = useInputValidation((value) => value !== "");
  const {
    value: enteredInsc,
    isValid: inscIsValid,
    hasError: inscHasError,
    valueChangeHandler: inscChangeHandler,
    inputBlurHandler: inscBlurHandler,
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

    //Aca pongo lo que quiera hacer con la info del form
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
      <PageLayoutTop title={"SOLICITUD DE INGRESO COMO MIEMBRO"} />
      <form className={styles.form} onSubmit={submitHandler}>
        <label>
          Apellido y Nombre *
          <input
            type="text"
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
          <input type="text" />
        </label>
        <label>
          Apellido y Nombre *
          <input type="text" />
        </label>

        <button disabled={!formIsValid}>ENVIAR FORMULARIO</button>
      </form>
    </>
  );
}

export default FormularioMiembro;
