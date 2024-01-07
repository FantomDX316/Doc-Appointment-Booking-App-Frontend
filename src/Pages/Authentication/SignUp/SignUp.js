// -------------------------------------------------------------Imports---------------------------------------------------------------
import React, { useState } from 'react'
import styles from "./SignUp.module.css"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signUp } from '../../../Features/Actions/Authentication/authenticationActions';
import { useEffect } from 'react';
import { resetSignUpState } from '../../../Features/Slices/Authentication/authenticationSlice';
import { ButtonLoadingSpinner } from '../../../Components/Loader/ButtonLoadingSpinner/ButtonLoadingSpinner';

// -----------------------------------------------------------------------------------------------------------------------------------

const SignUp = () => {
  // ----------------------------------------------------------------States---------------------------------------------------------------

  //roleOptions -- options for the roles dropdown
  const roleOptions = [{ value: "User", label: "User" },
  { value: "Counselor", label: "Counselor" }]

  const [role, setRole] = useState("User");
  // -------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------Hooks---------------------------------------------------------------
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm()

  const navigate = useNavigate();

  // dispatch -- hook to dispatch the actions
  const dispatch = useDispatch();

  const { isUserCreated, isSignUpLoading } = useSelector((state) => state?.authentication)
  // -------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------Functions--------------------------------------------------------------

  // signupHandler -- handler to call the login api
  const signupHandler = (data) => {
    try {
      dispatch(signUp({ payload: { ...data, role }, role }))
    } catch (error) {
      toast.error(error.message);
    }
  }

  // -------------------------------------------------------------------------------------------------------------------------------------
  // --------------------------------------------------------------useEffects-----------------------------------------------------------

  useEffect(() => {
    if (isUserCreated) {
      reset();
      dispatch(resetSignUpState(false))
    }
  }, [isUserCreated])
  // -------------------------------------------------------------------------------------------------------------------------------------


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
                  <div className={`${styles.fieldContainer} col-md-6 col-sm-6 col-12 text-center`}>
                    <input type="text" id="firstName" disabled={isSignUpLoading ? true : false} placeholder='First Name' className={`${styles.nameField}`} {...register("firstName", {
                      required: true,
                    })} />
                    {errors.firstName && errors.firstName.type === "required" && (
                      <p className={`${styles.nameFieldError}`}>First Name is required.</p>
                    )}
                  </div>
                  <div className={`${styles.fieldContainer} col-md-6 col-sm-6 col-12 text-center `}>
                    <input type="text" id="lastName" placeholder='Last Name' className={`${styles.nameField}`} {...register("lastName", {
                      required: true,
                    })} />
                    {errors.lastName && errors.lastName.type === "required" && (
                      <p className={`${styles.nameFieldError}`}>Last Name is required.</p>
                    )}
                  </div>
                  <div className={`${styles.fieldContainer} col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="email" id="email" placeholder='Email' className={`${styles.nameField}`} {
                      ...register("email", {
                        required: true,
                      })
                    } />
                    {errors.email && errors.email.type === "required" && (
                      <p className={`${styles.nameFieldError}`}>Email is required.</p>
                    )}
                  </div>
                  <div className={`${styles.fieldContainer} col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="number" id="phone" placeholder='Phone' className={`${styles.nameField}`} {...register("phone", {
                      required: true,
                    })} />
                    {errors.phone && errors.phone.type === "required" && (
                      <p className={`${styles.nameFieldError}`}>Phone Number is required.</p>
                    )}
                  </div>
                  <div className={`${styles.fieldContainer} col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="password" id="password" placeholder='Password' className={`${styles.nameField}`} {...register("password", {
                      required: true,
                    })} />
                    {errors.password && errors.password.type === "required" && (
                      <p className={`${styles.nameFieldError}`}>Password is required.</p>
                    )}
                  </div>
                  <div className={`${styles.fieldContainer} col-md-6 col-sm-6 col-12 text-center mt-3`}>
                    <input type="password" id="confirmPassword" placeholder='Confirm Password' className={`${styles.nameField}`} {...register("confirmPassword", {
                      required: true,
                    })} />
                    {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                      <p className={`${styles.nameFieldError}`}>Confirm Password is required.</p>
                    )}
                  </div>
                  <div className={`${styles.fieldContainer} col-md-12 col-sm-12 col-12 text-center mt-2 d-flex justify-content-center`}>
                    <Select options={roleOptions} placeholder={"Role"} disabled={isSignUpLoading ? true : false} className={`${styles.inputField}`} onChange={(e) => setRole(e.value)} />
                  </div>
                  <div className="signupButtonContent col-md-12 col-12 col-sm-12 text-center mt-3">
                    <div className="signupButton">
                      {isSignUpLoading ? <button type="button" disabled={true} className={`${styles.signupButtonEle}`}><ButtonLoadingSpinner /></button> : <button type="submit" className={`${styles.signupButtonEle}`}>SIGN UP</button>}
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
