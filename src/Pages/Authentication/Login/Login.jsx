// ----------------------------------------------------------------Imports-------------------------------------------------------------- 
import React from 'react';
import styles from "./Login.module.css"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
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

    // -------------------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------Functions--------------------------------------------------------------

    // loginHandler -- handler to call the login api
    const loginHandler = (e) => {
        try {

        } catch (error) {

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
                                <h6>Don't Have an account? <span><u onClick={()=>{navigate("/signup")}} style={{cursor:"pointer"}}>Sign Up</u></span></h6>
                            </div>

                        </div>
                        <div className="midContent col-md-12 col-12 col-sm-12 p-4">
                            <form onSubmit={handleSubmit(loginHandler)} className={`${styles.loginForm} col-md-12 d-flex flex-column mt-4`}>
                                <div className={`col-md-12 col-sm-12 col-12 text-center m-2`}>
                                    <input type="text" id="email" placeholder='Email' className={`${styles.emailInput}`} />
                                </div>
                                <div className={`col-md-12 col-sm-12 col-12 text-center m-2`}>
                                    <input type="password" id="password" placeholder='Password' className={`${styles.passwordInput}`} />
                                </div>
                                <div className="loginButtonContent col-md-12 col-12 col-sm-12 text-center mt-5">
                                    <div className="forgotPasswordContent">
                                        <h6><u>Forgot Your Password?</u></h6>
                                    </div>
                                    <div className="loginButton">
                                        <button type="submit" className={`${styles.loginButtonEle}`}>LOG IN</button>
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
