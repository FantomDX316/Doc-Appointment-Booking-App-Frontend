// -------------------------------------------------------------Imports---------------------------------------------------------------
import React, { useRef } from 'react';
import styles from "./Counsellor.module.css";
import defaultProfileImage from "../../Assets/Images/defaultProfileImage.jpg"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// -----------------------------------------------------------------------------------------------------------------------------------

const Counsellor = () => {
    // --------------------------------------------------------------States---------------------------------------------------------------
    const counsellorInfo = ["Specialization", "Experience", "Consultation Fee", "Availability"]

    const [profileImage, setProfileImage] = useState(defaultProfileImage);
    // -----------------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------Hooks---------------------------------------------------------------
    const profileImageRef = useRef();

    const {
        register,
        formState:{errors},
        handleSubmit,
        reset
    } = useForm()
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------Functions-------------------------------------------------------------

    const profileImageHandler = (e) => {
        let imgFile = e.target.files[0];
        let imgUrl = URL.createObjectURL(imgFile);
        setProfileImage(imgUrl);
    }

    // counsellorSubmitHandler -- handler to handle the final submit
    const counsellorSubmitHandler = ()=>{

    }
    // -----------------------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------useEffects------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------


    return (
        <div className={`${styles.counsellorContainer} d-flex flex-column align-items-center`}>
            <form className={`${styles.counsellorWrapper} d-flex flex-column align-items-center`} onSubmit={handleSubmit(counsellorSubmitHandler)}>
                <div className={`${styles.counsellorProfileImageCard} col-md-12 col-12 col-sm-12 d-flex justify-content-center m-3`}>
                    <div className={`${styles.profileImageFrame}`} onClick={() => { profileImageRef.current.click() }}>
                        <img src={profileImage} />
                        <input type="file" accept='image/jpg' className='d-none' ref={profileImageRef} onChange={profileImageHandler} />
                    </div>
                </div>
                <div className={`${styles.counsellorProfileInfo} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}>
                    <p className={`${styles.counsellorProfileInfoTitle} col-md-12 col-sm-12 col-12 mb-3`}>Counsellor Info</p>
                    {counsellorInfo.map((info) => {
                        return (
                            <>
                                <div className={`col-md-4 col-4 col-sm-4 text-center`}>
                                    <p className='m-2'>{info}</p>
                                </div>
                                <div className={`col-md-8 col-8 col-sm-8 text-center`}>
                                    <select className={`col-md-10 col-sm-10 col-10 m-2`}></select>
                                </div>
                            </>
                        )
                    })}
                </div>
                <div className={`${styles.counsellorBio} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}>
                    <p className={`${styles.counsellorBioTitle} col-md-12 col-sm-12 col-12 mb-3`}>Counsellor Bio</p>
                    <textarea className={`${styles.counsellorBioTextArea} col-md-10 col-sm-10 col-10 p-2`} placeholder="Counsellor Bio"></textarea>
                </div>
                <div className={`${styles.counsellorIntroductoryVideos} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}>
                    <p className={`${styles.counsellorBioTitle} col-md-12 col-sm-12 col-12 mb-3`}>Counsellor Introductory Videos</p>

                </div>
            </form>
        </div>
    )
}

export default Counsellor
