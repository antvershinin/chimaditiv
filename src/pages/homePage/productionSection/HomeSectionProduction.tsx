import React from "react";
import styles from "./Production.module.css";
import { HomeCatalogue } from "../../../components/homeCatalogue/HomeCatalogue";
import { catalogues } from "../../../data/catalogues/catalogues";
import SouthIcon from '@mui/icons-material/South';


export const HomeSectionProduction = () => {
  return (
    <div className={styles.content}>
      <div style={{ display: "flex", alignItems: "center", gap:'10px' }}>
        <h1>Наши каталоги</h1> {<SouthIcon fontSize="large" />}
      </div>
      <HomeCatalogue catalogue cards={catalogues} />
    </div>
  );
};
