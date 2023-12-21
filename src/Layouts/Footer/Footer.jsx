import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerContent} row`}>
        <div className={`${styles.footerSocialLinks} col-md-4`}>
            <div className={`${styles.footerSocialLinksContent} row justify-content-center align-items-center`}>
              <div className={`col-md-12 text-center`}>
                <strong style={{color:"white",fontFamily:""}}>Appointment just one click away</strong>
              </div>
            </div>
        </div>
        <div className={`${styles.footerTabs} col-md-8`}></div>
      </div>
    </div>
  )
}

export default Footer
