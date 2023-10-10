import PageLayoutTop from "../Components/PageLayoutTop";
import emailjs from "@emailjs/browser";
import styles from "./FormularioMiembro.module.css";
import { useRef, useState } from "react";
import ToastForm from "../Components/ToastForm";
import { Transition } from "react-transition-group";
import useInput from "../Hooks/useInput";
import { getForm } from "../Utils/form";
import Input from "../Components/Input";

const valNotEmpty = val => val.trim() !== "";
const defaultErrMsg = "Este campo es obligatorio.";
const regularExpressions = {
  name: /^[a-zA-ZÁ-ÿ\s]{2,100}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function FormularioMiembro() {
  const formRef = useRef();
  const nodeRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState("");
  const [toastContent, setToastContent] = useState("");

  const closeToast = () => setShowToast(false);

  // Validacion inputs
  const [nameInputStates, nameProps] = useInput(value =>
    regularExpressions.name.test(value)
  );
  const [dniInputStates, dniProps] = useInput(valNotEmpty);
  const [cuitInputStates, cuitProps] = useInput(valNotEmpty);
  const [direcInputStates, direcProps] = useInput(valNotEmpty);
  const [cityInputStates, cityProps] = useInput(valNotEmpty);
  const [codeInputStates, codeProps] = useInput(valNotEmpty);
  const [countryInputStates, countryProps] = useInput(valNotEmpty);
  const [telInputStates, telProps] = useInput(valNotEmpty);
  const [emailInputStates, emailProps] = useInput(value =>
    regularExpressions.email.test(value)
  );
  const [tituloInputStates, tituloProps] = useInput(valNotEmpty);
  const [expInputStates, expProps] = useInput(valNotEmpty);
  const [gradInputStates, gradProps] = useInput(valNotEmpty);
  const [actInputStates, actProps] = useInput(valNotEmpty);
  const [workInputStates, workProps] = useInput(valNotEmpty);
  const [inscInputStates, inscProps] = useInput(valNotEmpty);
  const [refSelectInputStates, refSelectProps] = useInput(valNotEmpty);
  const [referenceInputStates, referenceProps] = useInput(valNotEmpty);

  const referenceIsValid =
    refSelectInputStates.isValid || referenceInputStates.isValid;

  const { formIsValid, formReset } = getForm(
    nameInputStates,
    dniInputStates,
    cuitInputStates,
    direcInputStates,
    cityInputStates,
    codeInputStates,
    countryInputStates,
    telInputStates,
    emailInputStates,
    tituloInputStates,
    expInputStates,
    gradInputStates,
    actInputStates,
    workInputStates,
    inscInputStates,
    refSelectInputStates,
    { isValid: referenceIsValid, reset: referenceInputStates.reset } // manually add the reference field
  );

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    //From this point the form is validated and ready to be sent or else.

    // development
    // emailjs
    //   .sendForm(
    //     "service_c06mxxs",
    //     "template_cdqbr26",
    //     formRef.current,
    //     "uSmUolwAYwC88M8dh"
    //   )
    // production
    emailjs
      .sendForm(
        "service_vxdyvbb",
        "template_tuoxxvi",
        formRef.current,
        "9rHxPlKgX22r13JLO"
      )
      .then(result => {
        console.log(result, result.text);
        setToastContent("Formulario enviado!");
        setToastColor("var(--confirmation-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        // Resetting all values to ""
        formReset();
      })
      .catch(err => {
        console.log(err.text);
        setToastContent("Algo salió mal.");
        setToastColor("var(--accent-color)");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
      });
  };

  return (
    <>
      <Transition in={showToast} timeout={200} nodeRef={nodeRef}>
        {state => (
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
        <Input
          type="text"
          labelText="Apellido y Nombre *"
          name="apellido--nombre"
          errMsg={defaultErrMsg}
          {...nameProps}
        />
        <Input
          type="text"
          labelText="N° y tipo de documento *"
          name="documento--tipo"
          errMsg={defaultErrMsg}
          {...dniProps}
        />
        <Input
          type="number"
          labelText="N° CUIT o CUIL *"
          name="cuit-cuil"
          errMsg={defaultErrMsg}
          {...cuitProps}
        />
        <Input
          type="text"
          labelText="Dirección *"
          name="direccion"
          errMsg={defaultErrMsg}
          {...direcProps}
        />
        <Input
          type="text"
          labelText="Ciudad/Provincia *"
          name="ciudad--provincia"
          errMsg={defaultErrMsg}
          {...cityProps}
        />
        <Input
          type="number"
          labelText="Código Postal *"
          name="codigo-postal"
          errMsg={defaultErrMsg}
          {...codeProps}
        />
        <Input
          type="text"
          labelText="País *"
          name="pais"
          errMsg={defaultErrMsg}
          {...countryProps}
        />
        <Input
          type="number"
          labelText="Teléfono *"
          name="telefono"
          errMsg={defaultErrMsg}
          {...telProps}
        />
        <Input
          type="email"
          labelText="E-mail *"
          name="email"
          errMsg="Este campo es obligatorio y debe ser un e-mail válido."
          {...emailProps}
        />
        <label>
          Título *
          <select
            onChange={tituloProps.onChange}
            onBlur={tituloProps.onBlur}
            value={tituloProps.value}
            className={tituloProps.classes}
            name="titulo"
          >
            <option value="">Seleccione una opción:</option>
            <option value="psicologo">Psicólogo</option>
            <option value="licenciado-psicologia">
              Licenciado en Psicología
            </option>
          </select>
          {tituloProps.isInvalid && (
            <p className={"p-invalid"}>Este campo es obligatorio.</p>
          )}
        </label>
        <Input
          type="text"
          labelText="Expedido por *"
          name="titulo-expedido-por"
          errMsg={defaultErrMsg}
          {...expProps}
        />
        <Input
          type="date"
          labelText="Fecha de Graduación *"
          name="fecha-graduacion"
          errMsg={defaultErrMsg}
          {...gradProps}
        />
        <label>
          Actividad *
          <textarea
            name="actividad"
            onChange={actProps.onChange}
            onBlur={actProps.onBlur}
            value={actProps.value}
            className={actProps.classes}
          />
          {actProps.isInvalid && (
            <p className={"p-invalid"}>Este campo es obligatorio.</p>
          )}
        </label>
        <label>
          Institución/es en la/s que trabaja *
          <textarea
            name="instituciones"
            onChange={workProps.onChange}
            onBlur={workProps.onBlur}
            value={workProps.value}
            className={workProps.classes}
          />
          {workProps.isInvalid && (
            <p className={"p-invalid"}>Este campo es obligatorio.</p>
          )}
        </label>
        <Input
          type="date"
          labelText="Fecha de inscripción *"
          name="fecha-inscripcion"
          errMsg={defaultErrMsg}
          {...inscProps}
        />
        <p>Miembros que lo/la pueden presentar:</p>
        <label>
          Apellido y Nombre *
          <input type="text" name="miembro-1" />
        </label>
        <label>
          Apellido y Nombre *
          <input type="text" name="miembro-2" />
        </label>
        <label>
          ¿Por qué medio conociste ADEIP? *
          <select
            name="referencia-select"
            value={refSelectProps.value}
            onChange={refSelectProps.onChange}
            onBlur={refSelectProps.onBlur}
            className={refSelectProps.classes}
          >
            <option value="none">Seleccione una opción</option>
            <option value="Sitio Web">Sitio Web</option>
            <option value="Redes sociales">Redes sociales</option>
            <option value="Colegas">Colegas</option>
            <option value="Universidad">Universidad</option>
            <option value="Otro">Otro</option>
          </select>
          {refSelectProps.isInvalid && (
            <p className={"p-invalid"}>Este campo es obligatorio.</p>
          )}
        </label>
        {refSelectProps.value === "Otro" && (
          <Input
            type="text"
            labelText=""
            name="referencia"
            errMsg={defaultErrMsg}
            {...referenceProps}
          />
        )}

        <button disabled={!formIsValid}>ENVIAR FORMULARIO</button>
      </form>
    </>
  );
}

export default FormularioMiembro;
