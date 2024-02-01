// -------------------------------------------------------------Imports---------------------------------------------------------------
import React, { useRef } from "react";
import styles from "./Counsellor.module.css";
import defaultProfileImage from "../../Assets/Images/defaultProfileImage.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// -----------------------------------------------------------------------------------------------------------------------------------

const Counsellor = () => {
  // --------------------------------------------------------------States---------------------------------------------------------------

  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  // -----------------------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------Hooks---------------------------------------------------------------
  const profileImageRef = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // -----------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------Functions-------------------------------------------------------------

  // profileImageHandler -- handler to handle the change in the profile image
  const profileImageHandler = (e) => {
    let imgFile = e.target.files[0];
    let imgUrl = URL.createObjectURL(imgFile);
    setProfileImage(imgUrl);
  };

  // counsellorSubmitHandler -- handler to handle the final submit
  const counsellorSubmitHandler = () => {};
  // -----------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------useEffects------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------

  return (
    <div
      className={`${styles.counsellorContainer} d-flex flex-column align-items-center`}
    >
      <form
        className={`${styles.counsellorWrapper} d-flex flex-column align-items-center`}
        onSubmit={handleSubmit(counsellorSubmitHandler)}
      >
        <div
          className={`${styles.counsellorProfileImageCard} col-md-12 col-12 col-sm-12 d-flex justify-content-center m-3`}
        >
          <div
            className={`${styles.profileImageFrame}`}
            onClick={() => {
              profileImageRef.current.click();
            }}
          >
            <img src={profileImage} />
            <input
              type="file"
              accept="image/jpg"
              className="d-none"
              ref={profileImageRef}
              onChange={profileImageHandler}
            />
          </div>
        </div>
        <div
          className={`${styles.counsellorProfileInfo} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}
        >
          <p
            className={`${styles.counsellorProfileInfoTitle} col-md-12 col-sm-12 col-12 mb-3`}
          >
            Counselor Info
          </p>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}>
              <p className="m-2">Specialization</p>
            </div>
            <div className={`col-md-8 col-8 col-sm-8 text-center`}>
              <input
                type="text"
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
                placeholder="Specialization"
              ></input>
            </div>
          </>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}>
              <p className="m-2">Experience</p>
            </div>
            <div className={`col-md-8 col-8 col-sm-8 text-center`}>
              <select
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
              >
                <option value="">Choose</option>
                {Array(30)
                  .fill(0)
                  .map((_, index) => {
                    return <option value={index + 1}>{index + 1}</option>;
                  })}
              </select>
            </div>
          </>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}>
              <p className="m-2">Consultation Fees</p>
            </div>
            <div className={`col-md-8 col-8 col-sm-8 text-center`}>
              <input
                type="number"
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
                placeholder="Enter in Rupees"
              ></input>
            </div>
          </>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}>
              <p className="m-2">Availability</p>
            </div>
            <div className={`col-md-8 col-8 col-sm-8 text-center`}>
              <DatePicker
                minDate={new Date()}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                showYearDropdown
                scrollableMonthYearDropdown
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
              />
            </div>
          </>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}></div>
            <div className={`col-md-8 col-8 col-sm-8 d-flex justify-content-center`}>
              <div
                type="number"
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
              ></div>
            </div>
          </>
        </div>
        <div
          className={`${styles.counsellorBio} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}
        >
          <p
            className={`${styles.counsellorBioTitle} col-md-12 col-sm-12 col-12 mb-3`}
          >
            Counselor Bio
          </p>
          <textarea
            className={`${styles.counsellorBioTextArea} col-md-10 col-sm-10 col-10 p-2`}
            placeholder="Counsellor Bio"
          ></textarea>
        </div>
        <div
          className={`${styles.counsellorIntroductoryVideos} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}
        >
          <p
            className={`${styles.counsellorBioTitle} col-md-12 col-sm-12 col-12 mb-3`}
          >
            Counselor Introductory Videos
          </p>
        </div>
      </form>
    </div>
  );
};

export default Counsellor;
