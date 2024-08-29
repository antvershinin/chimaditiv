import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/header/chimaditivLogo.png";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useNavigate } from "react-router";

export const Header = () => {

  const navigate = useNavigate()

  return (
    <div className={styles.header}>
      <div onClick={()=>navigate('/')} className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
      </div>
    </div>
  );
};
