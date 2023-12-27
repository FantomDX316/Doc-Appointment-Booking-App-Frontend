// -------------------------------------------------------------Imports---------------------------------------------------------------
import React from 'react'
import styles from "./SignUp.module.css"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Select from "react-select";

// -----------------------------------------------------------------------------------------------------------------------------------

const SignUp = () => {
  // ----------------------------------------------------------------States---------------------------------------------------------------

  //roleOptions -- options for the roles dropdown
  const roleOptions = [{ value: "user", label: "User" },
  { value: "counselor", label: "Counselor" }]

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
        <div className={`${styles.signupCard} col-md-5`}>
          <div className={`${styles.signupContent}`}>
            <div className="topContent col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center">
              <div className={` col-md-12 col-12 col-sm-12 text-center p-2`}>
                <h1 className={`${styles.signupCardTitle}`}>Sign Up</h1>
              </div>
              <div className="noAccount">
                <h6>Already Have an account? <span><u onClick={() => { navigate("/login") }} style={{ cursor: "pointer" }}>Log In</u></span></h6>
              </div>

            </div>
            <div className="midContent col-md-12 col-12 col-sm-12 p-4">
              <form onSubmit={handleSubmit(signupHandler)} className={`${styles.signupForm} col-md-12 d-flex flex-column mt-4`}>
                <div className="row">
                  <div className={`col-md-6 col-sm-6 col-12 text-center`}>
                    <input type="text" id="firstName" placeholder='First Name' className={`${styles.nameField}`} />
                  </div>
                  <div className={`col-md-6 col-sm-6 col-12 text-center `}>
                    <input type="text" id="lastName" placeholder='Last Name' className={`${styles.nameField}`} />
                  </div>
                  <div className={`col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="email" id="email" placeholder='Email' className={`${styles.nameField}`} />
                  </div>
                  <div className={`col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="number" id="phone" placeholder='Phone' className={`${styles.nameField}`} />
                  </div>
                  <div className={`col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="password" id="password" placeholder='Password' className={`${styles.nameField}`} />
                  </div>
                  <div className={`col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="password" id="confirmPassword" placeholder='Confirm Password' className={`${styles.nameField}`} />
                  </div>
                  <div className={`col-md-12 col-sm-12 col-12 text-center mt-3 d-flex justify-content-center`}>
                    <Select options={roleOptions} placeholder={"Role"} className={`${styles.inputField}`}/>
                  </div>
                  <div className="signupButtonContent col-md-12 col-12 col-sm-12 text-center mt-5">
                    <div className="signupButton">
                      <button type="submit" className={`${styles.signupButtonEle}`}>SIGN UP</button>
                    </div>
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
