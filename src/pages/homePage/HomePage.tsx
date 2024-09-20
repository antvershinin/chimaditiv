import React from 'react'
import { HomeSectionInfo } from './infoSection/HomeSectionInfo'
import { HomeSectionCatalogue } from './catalogueSection/HomeSectionProduction'
import styles from './HomePage.module.css'
import { HomeSectionPartners } from './partnersSection/HomeSectionPartners'

export const HomePage = () => {
  return (
    <div className={styles.main}>
        <HomeSectionInfo/>
        <HomeSectionCatalogue/>
        <HomeSectionPartners/>
    </div>
  )
}
