import React from "react";
import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sobre a API</h1>
        <h1 className={styles.title2}>Nome da API: <span className={styles.nameapi}>Coffee</span></h1>
        <h1>Clique no link abaixo para ver a documentação da Api</h1>
        <div className={styles.enfeite}>
          <a href="https://sampleapis.com/api-list/coffee" className={styles.link}>Link Documentação API</a>
        </div>
        <p className={styles.title2}>URL utilizada para utilização da api:</p>
        <div className={styles.enfeite}>
          <p className={styles.link}>https://api.sampleapis.com/coffee</p>
        </div>
        <p>Endpoints utilizados: </p>
        <div className={styles.enfeite}>
          <p className={styles.link}>/hot, /iced</p>
        </div>
        <p>atributos recebidos: </p>
        <div className={styles.enfeite}>
          <p className={styles.link}>title, description, ingredients, image</p>
        </div>
        <p>A api escolhida disponibiliza vários tipos de café, tanto gelados quanto quentes</p>
      </div>
    </div>
  );
}