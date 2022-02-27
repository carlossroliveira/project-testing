import React from "react";

import styles from "./style.module.css";

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Participe de nossas news com promoções e novidades!
        </h1>
        <div className={styles.mobile}>
          <input className={styles.input} type="text" placeholder="Digite seu nome" />
          <input className={styles.input} type="text" placeholder="Digite seu email" />
          <button className={styles.button}>Eu quero!</button>
        </div>
      </div>
    </form>
  );
};
