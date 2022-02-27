import React from "react";
import footerParteThree from "../assets/img/footerParteThree.png";
import footerPartOne from "../assets/img/footerPartOne.png";
import footerPartTwo from "../assets/img/footerPartTwo.png";
import styles from "./style.module.css";

import { MdEmail } from "react-icons/md";
import { MdHeadphones } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container__one}>
          <h3>Localização</h3>
          <div className={styles.container__bar}></div>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP <br />
            brasil@corebiz.ag <br />
            +55 11 3090 1039
          </p>
        </div>

        <div className={styles.container__two}>
          <div className={styles.container__two__div}>
            <span className={styles.container__two__span}><MdEmail/></span>
            <p>Entre em contato</p>
          </div>

          <div className={styles.container__two__div}>
            <span className={styles.container__three__span}><MdHeadphones/></span>
            <p className={styles.container__two__p}>
              Fale com nosso consultor online
            </p>
          </div>
        </div>

        <div className={styles.container__three}>
          <div>
            <img src={footerParteThree} alt="Logo footer" />
            <img src={footerPartOne} alt="Logo footer" />
          </div>
          <img src={footerPartTwo} alt="Logo footer" />
        </div>
      </div>
    </footer>
  );
};
