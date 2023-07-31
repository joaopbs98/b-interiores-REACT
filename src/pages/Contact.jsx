import SectionTitle from "../components/Layout/SectionTitle/SectionTitle";
import styles from "../styles/page.module.scss";
import Btn from "../components/UIComponents/Button/Btn";

function Contact() {
  return (
    <div className={styles.box}>
      <SectionTitle content="Fale Connosco" />
      <div className={styles.contact}>
        <p>
          Tem alguma questão sobre os nossos serviços ou pretende um orçamento?
          Preencha o formulário de contacto abaixo e um dos membros da nossa
          equipa entrará em contacto consigo dentro de 24 horas.
        </p>
        <form action="">
          <label htmlFor="name">O seu Nome</label>
          <input type="text" placeholder="John Doe" id="name" />
          <label htmlFor="email">E-Mail</label>
          <input type="email" placeholder="exemplo@exemplo.com" id="email" />
          <label htmlFor="phone">Número de Telemóvel</label>
          <input type="number" placeholder="+111 123 123 123" id="phone" />
          <label htmlFor="products">Produtos</label>
          <input type="text" disabled="disabled" />
          <label htmlFor="info">Mais Informações</label>
          <input
            type="text"
            placeholder="Informações sobre medidas, materiais, acabamentos, entre outros."
            id="info"
          />
          <div className={styles.load}>
            <Btn content="Enviar"></Btn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
