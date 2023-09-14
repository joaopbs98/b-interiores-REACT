import React from "react";
import styles from "../styles/page.module.scss";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1>404 - Página Não Encontrada</h1>
        <p>Lamentamos, mas a página que procura não existe.</p>
        <p>Por favor, verifique o endereço ou volte à página inicial.</p>
      </div>
    </div>
  );
}
export default NotFound;
