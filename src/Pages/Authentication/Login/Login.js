// ----------------------------------------------------------------Imports-------------------------------------------------------------- 
import React from 'react';
import styles from "./Login.module.css"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Features/Actions/Authentication/authenticationActions';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonLoadingSpinner } from '../../../Components/Loader/ButtonLoadingSpinner/ButtonLoadingSpinner';
// -------------------------------------------------------------------------------------------------------------------------------------


const Login = () => {
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


    // dispatch -- hook to dispatch the actions
    const dispatch = useDispatch();


    const { isLoginLoading } = useSelector((state) => state?.authentication)
    // -------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------Functions--------------------------------------------------------------

    // loginHandler -- handler to call the login api
    const loginHandler = (data) => {
        try {
            dispatch(login(data))
        } catch (error) {
            toast.error(error.message)
        }
    }

    // -------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------useEffects-----------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className={`${styles.loginContainer}`}>
            <div className={`${styles.loginWrapper}`}>
                <div className={`${styles.loginCard} col-md-4`}>
                    <div className={`${styles.loginContent}`}>
                        <div className="topContent col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center">
                            <div className={` col-md-12 col-12 col-sm-12 text-center p-2`}>
                                <h1 className={`${styles.loginCardTitle}`}>Log In</h1>
                            </div>
                            <div className="noAccount">
                                <h6>Don't Have an account? <span><u onClick={() => { navigate("/signup") }} style={{ cursor: "pointer" }}>Sign Up</u></span></h6>
                            </div>

                        </div>
                        <div className="midContent col-md-12 col-12 col-sm-12 p-4">
                            <form onSubmit={handleSubmit(loginHandler)} className={`${styles.loginForm} col-md-12 d-flex flex-column mt-4`}>
                                <div className={`${styles.fieldContainer} col-md-12 col-sm-12 col-12 text-center m-2`}>
                                    <input type="text" id="email" disabled={isLoginLoading ? true : false} placeholder='Email' className={`${styles.emailInput}`} {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        }
                                    })} />
                                    {errors.email && errors.email.type === "required" && (
                                        <p className={`${styles.nameFieldError}`}>Email is required.</p>
                                    )}
                                </div>
                                <div className={`${styles.fieldContainer} col-md-12 col-sm-12 col-12 text-center m-2`}>
                                    <input type="password" id="password" disabled={isLoginLoading ? true : false} placeholder='Password' className={`${styles.passwordInput}`} {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        },

                                    })} />
                                    {errors.password && errors.password.type === "required" && (
                                        <p className={`${styles.nameFieldError}`}>Password is required.</p>
                                    )}
                                </div>
                                <div className="loginButtonContent col-md-12 col-12 col-sm-12 text-center mt-5">
                                    <div className="forgotPasswordContent">
                                        <h6><u>Forgot Your Password?</u></h6>
                                    </div>
                                    <div className="loginButton">
                                        {isLoginLoading ? <button type="button" disabled={true} className={`${styles.loginButtonEle}`}><ButtonLoadingSpinner /></button> : <button type="submit" className={`${styles.loginButtonEle}`}>LOG IN</button>}
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

export default Login
