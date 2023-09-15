import SectionTitle from "../components/Layout/SectionTitle/SectionTitle";
import styles from "../styles/page.module.scss";
import Btn from "../components/UIComponents/Button/Btn";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "" || number === "") {
      alert("Preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      number: number,
      email: email,
    };

    emailjs
      .send(
        "service_ztr6cal",
        "template_f8zmr51",
        templateParams,
        "w1xcLaDaWwQOymyPe"
      )
      .then(
        (response) => {
          console.log("E-Mail Enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setNumber("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  }
  return (
    <div className={styles.box}>
      <SectionTitle content="Fale Connosco" />
      <div className={styles.contact}>
        <p>
          Tem alguma questão sobre os nossos serviços ou pretende um orçamento?
          <br />
          Preencha o formulário de contacto abaixo e um dos membros da nossa
          equipa entrará em contacto consigo dentro de 24 horas.
        </p>
        <form action="" onSubmit={sendEmail}>
          <label htmlFor="name">O seu Nome</label>
          <input
            type="text"
            placeholder="João Silva"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            placeholder="exemplo@exemplo.com"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="phone">Número de Telemóvel</label>
          <input
            type="number"
            placeholder="+111 123 123 123"
            id="phone"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          <label htmlFor="info">Mais Informações</label>
          <input
            type="text"
            placeholder="Informações sobre medidas, materiais, acabamentos, entre outros."
            id="info"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <input className={styles.button} type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
