import React from "react";
import styles from "./HomeSectionInfo.module.css";

export const HomeSectionInfo = () => {
  return (
    <div>
      <div className={styles.imageWrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.title}>
            ЭФФЕКТНЫЕ ПИГМЕНТЫ
          </div>
          <div className={styles.line}></div>
          <div className={styles.description}>
            <div className={styles.descItem}><div className={styles.round}/>Разработка</div>
            <div className={styles.descItem}><div className={styles.round}/>Производство</div>
            <div className={styles.descItem}><div className={styles.round}/>Продажа</div>
          </div>
          </div>
      </div>
    </div>
  );
};
