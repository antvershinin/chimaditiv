import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import styles from "./Layout.module.css";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className={styles.layout}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Outlet/>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
    </div>
  );
};
