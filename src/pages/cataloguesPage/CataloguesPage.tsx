import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catalogues, ICatalogue } from "../../data/catalogues/catalogues";
import { PigmentCard } from "../../components/pigment/PigmentCard";
import styles from './CataloguesPage.module.css'

export const Catalogue0 = () => {
  const [catalogue, setCatalogue] = useState<ICatalogue>();
  const { catalog } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const index = catalogues.findIndex((el) => el.adress === catalog);

    if (index === -1) navigate("/");
    else {
      setCatalogue(catalogues[index]);
    }
  }, [catalog]);

  return (
    <div className={styles.main}>
      {catalogue && <div className={styles.title}>{catalogue.name}</div>}
      <div className={styles.description}>{catalogue?.description}</div>
      <div className={styles.cardsWrapper}>
      {catalogue?.pigments.map((el) => (
        <div className={styles.card}>
        <PigmentCard key={el.name} pigment={el} />
        </div>
      ))}
      </div>
    </div>
  );
};
