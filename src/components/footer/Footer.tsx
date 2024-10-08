import React from "react";
import styles from "./Footer.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ScienceIcon from "@mui/icons-material/Science";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <ScienceIcon />
            <span>ООО Хим-Адитив</span>
          </div>
          <div className={styles.contact}>
            <LocationOnIcon />
            <span>
              347904, Ростовская область,  г. Таганрог, ул. Фрунзе, д.148 
            </span>
          </div>
        </div>
        <div className={styles.contacts}>
        <div className={styles.contact}>
            <PhoneIcon />
            <span>+7 8634 340 898</span>
          </div>
          <div className={styles.contact}>
            <EmailIcon />
            <span>
            chimaditiv@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className={styles.contactsTwo}></div>
    </div>
  );
};
