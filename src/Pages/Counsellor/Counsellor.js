// -------------------------------------------------------------Imports---------------------------------------------------------------
import React, { useRef } from "react";
import styles from "./Counsellor.module.css";
import defaultProfileImage from "../../Assets/Images/defaultProfileImage.jpg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCounselor } from "../../Features/Actions/Counselor/counselorActions";
import { useNavigate } from "react-router-dom";
import { resetCounselorState } from "../../Features/Slices/Counselor/counselorSlice";
import { setCounselorProfileUpdation } from "../../Features/Slices/Authentication/authenticationSlice";
// -----------------------------------------------------------------------------------------------------------------------------------

const Counsellor = () => {
  // --------------------------------------------------------------States---------------------------------------------------------------

  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  const [newDate, setNewDate] = useState(new Date());
  const [dateArray, setDateArray] = useState([]);
  const [profileImageData, setProfileImageData] = useState("");
  const [videoData, setVideoData] = useState([]);
  // -----------------------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------Hooks---------------------------------------------------------------

  const profileImageRef = useRef();

  const dispatch = useDispatch();

  const { isCounselorUpdated } = useSelector((state) => state?.counselor);

  const navigate = useNavigate();

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
    setProfileImageData(imgFile);
    let imgUrl = URL.createObjectURL(imgFile);
    setProfileImage(imgUrl);
  };

  // introVideoHandler -- handler to handle the change in the videos
  const introVideoHandler = (e) => {
    let videoFile = e.target.files[0];
    setVideoData([...videoData, videoFile]);
  };

  // counselorSubmitHandler -- handler to handle the final submit
  const counselorSubmitHandler = (data) => {
    try {
      const formData = new FormData();
      let payload = JSON.stringify({ ...data, availability: dateArray });

      console.log(payload);

      formData.append("payload", payload);
      formData.append("image", profileImageData);

      dispatch(updateCounselor(formData));
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
  useEffect(() => {
    if (isCounselorUpdated) {
      navigate("/");
      dispatch(resetCounselorState(false));
      dispatch(setCounselorProfileUpdation());
    }
  }, [isCounselorUpdated]);

  // -----------------------------------------------------------------------------------------------------------------------------------

  return (
    <div
      className={`${styles.counsellorContainer} d-flex flex-column align-items-center`}
    >
      <form
        className={`${styles.counsellorWrapper} d-flex flex-column align-items-center`}
        onSubmit={handleSubmit(counselorSubmitHandler)}
      >
        <h5>
          <span style={{ color: "red" }}>Note! </span> Please Update the Profile
          to Continue Using our Services
        </h5>
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
              <p className="m-2">Language</p>
            </div>
            <div className={`col-md-8 col-8 col-sm-8 text-center`}>
              <select
                className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
                {...register("language", {
                  required: {
                    value: true,
                    message: "Language is Required",
                  },
                })}
              >
                <option value="">Choose</option>
                <option value={"English"}>English</option>
                <option value={"Hindi"}>Hindi</option>
              </select>
              {errors.language && errors.language.type === "required" && (
                <p className={`${styles.nameFieldError}`}>
                  Language is required.
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
                selected={newDate}
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
                  >{`${new Date(date).getDate()}-${
                    new Date(date).getMonth() + 1
                  }-${new Date(date).getFullYear()}`}</div>
                ))}
              </div>
              {errors.availability &&
                errors.availability.type === "required" && (
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
            {...register("bio", {
              required: {
                value: true,
                message: "Counselor Bio is Required",
              },
            })}
          ></textarea>
          {errors.bio && errors.bio.type === "required" && (
            <p className={`${styles.nameFieldError}`}>
              Counselor Bio is required.
            </p>
          )}
        </div>
        {/* <div
          className={`${styles.counsellorIntroductoryVideos} col-md-12 col-12 col-sm-12 d-flex justify-content-center flex-wrap m-3`}
        >
          <p
            className={`${styles.counsellorBioTitle} col-md-12 col-sm-12 col-12 mb-3`}
          >
            Counselor Introductory Videos
          </p>
          <div className="col-md-10 col-10 col-sm-10 d-flex justify-content-start">
            <input type="file" accept="video/mp4" onChange={introVideoHandler} />
          </div>
          <div
            className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2  gap-3 d-flex align-items-center justify-content-center flex-wrap`}
          >
            {
              videoData.map((video, index) => {
                return <div className={`${styles.introVideoElement} p-1 col-md-4 col-sm-12 col-12 text-center`}>{`Video ${index + 1} - ${video?.name.length > 10 ? video?.name.slice(0, 10) : video?.name}...`}</div>
              })
            }
          </div>
        </div> */}
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
