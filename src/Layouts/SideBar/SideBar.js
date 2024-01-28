// ---------------------------------------------------------------Imports-----------------------------------------------------------------
import React from 'react';
import NavbarAccordion from '../../Components/Accordion/NavbarAccordion/NavbarAccordion';
import styles from "./SideBar.module.css";
// ----------------------------------------------------------------------------------------------------------------------------------------
const SideBar = () => {
  return (
    <div className={`${styles.SideBarContainer}`}>
      <NavbarAccordion />
    </div>
  )
}

export default SideBar
