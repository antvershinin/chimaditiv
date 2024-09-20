import React from "react";
import styles from "./Catalogue.module.css";
import { HomeCatalogue } from "../../../components/homeCatalogue/HomeCatalogue";
import { catalogues } from "../../../data/catalogues/catalogues";
import SouthIcon from "@mui/icons-material/South";
import { products } from "../../../data/products/products";

export const HomeSectionCatalogue = () => {
  return (
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <span className={styles.title}>Собственное производство</span>
      </div>
      <HomeCatalogue catalogue cards={catalogues} />
      <div className={styles.titleWrapper}>
        <span className={styles.title}>Дистрибуция</span> 
      </div>
      <HomeCatalogue cards={products} />
      <div className={styles.titleWrapper}>
        <span className={styles.title}>Нам доверяют</span>
      </div>
    </div>
  );
};
