import React from 'react'
import { HomeSectionInfo } from './infoSection/HomeSectionInfo'
import { HomeSectionProduction } from './productionSection/HomeSectionProduction'
import styles from './HomePage.module.css'
import { HomeSectionPartners } from './partnersSection/HomeSectionPartners'

export const HomePage = () => {
  return (
    <div className={styles.main}>
        <HomeSectionInfo/>
        <HomeSectionProduction/>
        {/* <HomeSectionPartners/> */}
    </div>
  )
}
