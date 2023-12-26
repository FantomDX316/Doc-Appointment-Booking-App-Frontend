// -------------------------------------------------------------Imports---------------------------------------------------------------
import React from 'react'
import styles from "./SignUp.module.css"
import { useForm } from "react-hook-form";
import {  useNavigate } from 'react-router-dom';

// -----------------------------------------------------------------------------------------------------------------------------------

const SignUp = () => {
  // ----------------------------------------------------------------States---------------------------------------------------------------

  // -------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------Hooks---------------------------------------------------------------
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm()

  const navigate = useNavigate();

  // -------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------Functions--------------------------------------------------------------

  // signupHandler -- handler to call the login api
  const signupHandler = (e) => {
    try {

    } catch (error) {

    }
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------useEffects-----------------------------------------------------------

  // -------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={`${styles.signupContainer}`}>
      <div className={`${styles.signupWrapper}`}>
        <div className={`${styles.signupCard} col-md-4`}>
          <div className={`${styles.signupContent}`}>
            <div className="topContent col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center">
              <div className={` col-md-12 col-12 col-sm-12 text-center p-2`}>
                <h1 className={`${styles.signupCardTitle}`}>Sign Up</h1>
              </div>
              <div className="noAccount">
                <h6>Already Have an account? <span><u onClick={()=>{navigate("/login")}} style={{cursor:"pointer"}}>Log In</u></span></h6>
              </div>

            </div>
            <div className="midContent col-md-12 col-12 col-sm-12 p-4">
              <form onSubmit={handleSubmit(signupHandler)} className={`${styles.signupForm} col-md-12 d-flex flex-column mt-4`}>
                <div className={`col-md-12 col-sm-12 col-12 text-center m-2`}>
                  <input type="text" id="email" placeholder='Email' className={`${styles.emailInput}`} />
                </div>
                <div className={`col-md-12 col-sm-12 col-12 text-center m-2`}>
                  <input type="password" id="password" placeholder='Password' className={`${styles.passwordInput}`} />
                </div>
                <div className={`col-md-12 col-sm-12 col-12 text-center m-2`}>
                  <input type="password" id="password" placeholder='Confirm Password' className={`${styles.confirmPasswordInput}`} />
                </div>
                <div className="signupButtonContent col-md-12 col-12 col-sm-12 text-center mt-5">
                  <div className="signupButton">
                    <button type="submit" className={`${styles.signupButtonEle}`}>SIGN UP</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
