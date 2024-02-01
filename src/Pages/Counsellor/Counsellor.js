// -------------------------------------------------------------Imports---------------------------------------------------------------
import React, { useRef } from "react";
import styles from "./Counsellor.module.css";
import defaultProfileImage from "../../Assets/Images/defaultProfileImage.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
// -----------------------------------------------------------------------------------------------------------------------------------

const Counsellor = () => {
  // --------------------------------------------------------------States---------------------------------------------------------------

  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [newDate, setNewDate] = useState(new Date());
  const [dateArray, setDateArray] = useState([]);
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

  // counselorSubmitHandler -- handler to handle the final submit
  const counselorSubmitHandler = (data) => {
    try {
    } catch (error) {
      toast.error(error.message);
    }
  };

  //   dateHandler -- handler to handle the date picked by the user
  const dateHandler = (date) => {
    setDateArray([...dateArray, date.toISOString()]);
    setNewDate(date);
  };
  // -----------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------useEffects------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------

  return (
    <div
      className={`${styles.counsellorContainer} d-flex flex-column align-items-center`}
    >
      <form
        className={`${styles.counsellorWrapper} d-flex flex-column align-items-center`}
        onSubmit={handleSubmit(counselorSubmitHandler)}
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
                {...register("specialization", {
                  required: {
                    value: true,
                    message: "Specialization is Required",
                  },
                })}
              />
              {errors.specialization &&
                errors.specialization.type === "required" && (
                  <p className={`${styles.nameFieldError}`}>
                    Specialization is required.
                  </p>
                )}
            </div>
          </>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}>
              <p className="m-2">Experience</p>
            </div>
            <div className={`col-md-8 col-8 col-sm-8 text-center`}>
              <select
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
                {...register("experience", {
                  required: {
                    value: true,
                    message: "Experience is Required",
                  },
                })}
              >
                <option value="">Choose</option>
                {Array(30)
                  .fill(0)
                  .map((_, index) => {
                    return <option value={index + 1}>{index + 1}</option>;
                  })}
              </select>
              {errors.experience && errors.experience.type === "required" && (
                <p className={`${styles.nameFieldError}`}>
                  Experience is required.
                </p>
              )}
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
                {...register("consultationFees", {
                  required: {
                    value: true,
                    message: "Consultation Fees is Required",
                  },
                })}
              />
              {errors.consultationFees &&
                errors.consultationFees.type === "required" && (
                  <p className={`${styles.nameFieldError}`}>
                    Consultation Fees is required.
                  </p>
                )}
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
                onChange={dateHandler}
                {...register("availability", {
                  required: {
                    value: true,
                    message: "Availability is Required",
                  },
                })}
              />
            </div>
          </>
          <>
            <div className={`col-md-4 col-4 col-sm-4 text-center p-2`}></div>
            <div
              className={`col-md-8 col-8 col-sm-8 d-flex flex-column align-items-center justify-content-center`}
            >
              <div
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2  d-flex align-items-center justify-content-center flex-wrap`}
              >
                {dateArray.map((date) => (
                  <div
                    style={{
                      border: "1px solid green",
                      margin: "5px",
                      padding: "2px",
                      color: "green",
                    }}
                    className="col-md-4 col-sm-4 col-4 text-center"
                  >{`${new Date(date).getDay()}-${new Date(
                    date
                  ).getMonth()}-${new Date(date).getFullYear()}`}</div>
                ))}
              </div>
            {errors.availability && errors.availability.type === "required" && (
              <p className={`${styles.nameFieldError}`}>
                Availability is required.
              </p>
            )}
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
            {...register("counselorBio", {
              required: {
                value: true,
                message: "Counselor Bio is Required",
              },
            })}
          ></textarea>
          {errors.availability && errors.availability.type === "required" && (
            <p className={`${styles.nameFieldError}`}>
              Counselor Bio is required.
            </p>
          )}
        </div>
        <div
          className={`${styles.counsellorIntroductoryVideos} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}
        >
          <p
            className={`${styles.counsellorBioTitle} col-md-12 col-sm-12 col-12 mb-3`}
          >
            Counselor Introductory Videos
          </p>
          <div className="col-md-10 col-10 col-sm-10 d-flex justify-content-start">
            <input type="file" accept="video/mp4" />
          </div>
          <div
            className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2  d-flex align-items-center justify-content-center flex-wrap`}
          ></div>
        </div>
        <div
          className={`${styles.submitCounselorProfile} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}
        >
          <input type="submit" value="Submit Profile" />
        </div>
      </form>
    </div>
  );
};

export default Counsellor;
