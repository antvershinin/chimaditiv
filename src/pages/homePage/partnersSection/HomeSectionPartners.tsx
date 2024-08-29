import React from "react";
import styles from "./HomeSectionPartners.module.css";
import { partnersLogos } from "../../../assets/home/partners/partners";

export const HomeSectionPartners = () => {
  return (
    <div className={styles.main}>
      <div>Нам доверяют</div>
      <div className={styles.logosWrapper}>
        {partnersLogos.map((el) => (
          <div key={el} className={styles.logoWrapper}>
            <img className={styles.logo} src={el} />
          </div>
        ))}
      </div>
    </div>
  );
};
