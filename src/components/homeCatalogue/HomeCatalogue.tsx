import React from "react";
import styles from "./HomeCatalogue.module.css";
import { useNavigate } from "react-router";
import { ICatalogue } from "../../data/catalogues/catalogues";

interface Props {
  cards?: ICatalogue[];
  catalogue?: boolean;
}

export const HomeCatalogue = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      {props.cards && 
        props.cards.map((el) => (
          <div key={el.adress} className={styles.cardWrapper}>
            <img src={el.bgimage} className={styles.image} />
            <div className={styles.overlay}>
              <div className={styles.description}>
                {el.desctiptionShort}
              </div>
            </div>
            {/* <div onClick={()=>navigate(`/${props.catalogue ? 'catalog' : 'products'}/${el.adress}`)} className={styles.button}> */}
            {props.catalogue && <div onClick={()=>navigate(`/${props.catalogue ? 'catalog' : 'products'}/${el.adress}`)} className={styles.button}>
              <div className={styles.description}>Узнать больше</div>
            </div>}
          </div>
        ))}
    </div>
  );
};
