import PageLayoutTop from "../Components/PageLayoutTop";
import backgroundImage from "../Assets/contact-2.jpg";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <PageLayoutTop title={"CONTACTO"} image={backgroundImage} />
      <form className={styles.form}>
        <label>
          Su nombre *
          <input type="text" />
        </label>
        <label>
          Su E-mail *
          <input type="email" />
        </label>
        <label>
          Tema/Asunto *
          <input type="text" />
        </label>
        <label>
          Mensaje *
          <textarea />
        </label>
        <button>ENVIAR MENSAJE</button>
      </form>
    </>
  );
}

export default Contact;
