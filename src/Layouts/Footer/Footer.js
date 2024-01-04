// -------------------------------------------------------------Imports------------------------------------------------------
import React from 'react';
import styles from "./Footer.module.css"
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
// ----------------------------------------------------------------------------------------------------------------------------

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footerContent} row p-4`}>
        <div className={`${styles.footerSocialLinks} col-md-4`}>
          <div className={`${styles.footerSocialLinksContent} row justify-content-center align-items-center flex-column`}>
            <div className={`col-md-12 mx-3`}>
              <strong style={{ color: "white", fontFamily: "rubikScribble", fontSize: "2vw" }}>Appointment just one click away</strong>
              <div className={`col-md-12 d-flex justify-content-start align-items-center`}>
                <div className={`${styles.mailBox}  col-md-8 d-flex mt-2`}>
                  <div className={`${styles.sendMail} col-md-6`}>
                    <input type="text" className={`${styles.sendMailInput} col-md-12`} />
                  </div>
                  <div className={`${styles.mailButton} col-md-6`}>
                    <button type="button" className={`btn btn-danger col-md-12`} >SEND MAIL</button>
                  </div>
                </div>

              </div>
            </div>
            <div className={`col-md-12 d-flex justify-content-start mt-5 mx-3 flex-column`} style={{ marginTop: "0" }}>
              <div className="question col-md-10">
                <strong style={{ color: "orange", fontSize: "1.5vw" }}>Have a question?</strong>
              </div>
              <div className="question col-md-10">
                <strong style={{ color: "white", fontSize: "1vw" }}>Email us any time at : <u>email@gmail.com</u></strong>
              </div>
              <div className="socialLogos col-md-10 mt-2">
                <FaGithub style={{ color: "white" }} className={"col-md-1"}/>
                <FaInstagram style={{ color: "white" }} className={"col-md-1"}/>
                <FaFacebook style={{ color: "white" }} className={"col-md-1"}/>
                <RiTwitterXLine style={{ color: "white" }} className={"col-md-1"}/>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.footerTabs} col-md-8`}>
          <div className={`${styles.footerTabsContent} row justify-content-center align-items-center`}>
            {Array(4).fill(0).map(()=>{
              return (
                <div className="col-md-3 text-center">
                  <strong style={{color:"white"}}><u>Popular</u></strong>
                  {Array(5).fill(0).map(()=>{
                    return (
                      <p style={{color:"white"}} className="mt-3">Dummy tabs</p>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
