import React, { useState } from "react";

import styles from "./style.module.css";

export const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState(null);

  const handleWithValueName = ({ target }) =>
    setName(validateName(target.value));

  const handleWithValueEmail = ({ target }) =>
    setEmail(validateEmail(target.value));

  const validateName = (value) => {
    const regex = /[a-z]{3}/;
    if (value.length === "") {
      setError("Preencha seu nome");
    } else if (!regex.test(value)) {
      setError("Nome incorreto");
    } else {
      setError(null);
    }
  };

  const validateEmail = (value) => {
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    if (value.length === "") {
      setError("Preencha seu email");
    } else if (!regex.test(value)) {
      setError("Email incorreto");
    } else {
      setError(null);
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Participe de nossas news com promoções e novidades!
        </h1>
        <div className={styles.mobile}>
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={handleWithValueName}
          />
          {error && <p> {error}</p>}
          <input
            className={styles.input}
            type="text"
            placeholder="Digite seu email"
            value={email}
            onChange={handleWithValueEmail}
          />
          {error && <p> {error}</p>}
          <button className={styles.button}>Eu quero!</button>
        </div>
      </div>
    </form>
  );
};
