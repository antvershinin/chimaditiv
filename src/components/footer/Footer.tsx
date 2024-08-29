import React from "react";
import styles from "./Footer.module.css";
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScienceIcon from '@mui/icons-material/Science';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
        <div className={styles.contact}>
          <ScienceIcon/>
          <span>ООО Хим-Адитив</span>
        </div>
          <div className={styles.contact}>
            <LocationOnIcon/>
            <span>347904, Ростовская область, 
            г. Таганрог, ул. Фрунзе, д.148 </span>
          </div>
          <div className={styles.contact}>
            <LanguageIcon/>
            <span>www.chimaditiv.ru</span>
          </div>
        </div>
      </div>
      <div className={styles.contactsTwo}></div>
    </div>
  );
};
