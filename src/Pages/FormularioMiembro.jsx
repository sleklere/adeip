import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/formulario-miembro.jpg";
import styles from "./FormularioMiembro.module.css";

function FormularioMiembro() {
  return (
    <>
      <PageLayoutTop
        title={"SOLICITUD DE INGRESO COMO MIEMBRO"}
        image={backgroundImage}
      />
      <form className={styles.form}>
        <label>
          Apellido y Nombre *
          <input type="text" />
        </label>
        <label>
          N° y tipo de documento *
          <input type="text" />
        </label>
        <label>
          N° CUIT o CUIL *
          <input type="number" />
        </label>
        <label>
          Dirección *
          <input type="text" />
        </label>
        <label>
          Ciudad/Provincia *
          <input type="text" />
        </label>
        <label>
          Código Postal *
          <input type="number" />
        </label>
        <label>
          País *
          <input type="text" />
        </label>
        <label>
          Teléfono *
          <input type="tel" />
        </label>
        <label>
          E-mail *
          <input type="email" />
        </label>
        <label>
          Título *
          <select name="" id="">
            <option value="">Seleccione una opción:</option>
            <option value="psicologo">Psicólogo</option>
            <option value="licenciado-psicologia">
              Licenciado en Psicología
            </option>
          </select>
        </label>
        <label>
          Expedido por *
          <input type="text" />
        </label>
        <label>
          Fecha de Graduación *
          <input type="date" />
        </label>
        <label>
          Actividad *
          <textarea />
        </label>
        <label>
          Institución/es en la/s que trabaja *
          <textarea />
        </label>
        <label>
          Fecha de inscripción *
          <input type="date" />
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

        <button>ENVIAR FORMULARIO</button>
      </form>
    </>
  );
}

export default FormularioMiembro;
