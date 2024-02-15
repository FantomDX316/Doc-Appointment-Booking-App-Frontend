// -----------------------------------------------------------------Imports---------------------------------------------------------------
import React, { useRef, useState } from "react";
import styles from "./Profile.module.css";
import defaultProfileImage from "../../Assets/Images/defaultProfileImage.jpg";
import { IoIosAddCircle } from "react-icons/io";
import VideoModal from "../../Components/Modal/Video/VideoModal";

// ---------------------------------------------------------------------------------------------------------------------------------------

const Profile = () => {
  // ------------------------------------------------------------------States----------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------Hooks----------------------------------------------------------------
  const profileImageRef = useRef();

  const addMoreRef = useRef();

  const [profileImage, setProfileImage] = useState(defaultProfileImage);
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------Functions----------------------------------------------------------------
  // profileImageHandler
  const profileImageHandler = (e) => {
    let imgFile = e.target.files[0];
    let imgUrl = URL.createObjectURL(imgFile);
    setProfileImage(imgUrl);
  };
  // ----------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------------------------useEffects---------------------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={`${styles.profileContainer} d-flex justify-content-center`}>
      <div
        className={`${styles.profileWrapper} d-flex flex-column align-items-center`}
      >
        <div
          className={`${styles.profileTopContent} col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center p-2`}
        >
          <div
            className={`${styles.profileImageContainer}`}
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
          <div
            className={`${styles.profileUserDetailsContainer} col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center p-2`}
          >
            <p className={`${styles.profileUserName}`}>Saksham Kothari</p>
            <h3 className={`${styles.profileUserSpecialization}`}>
              Full Stack Developer
            </h3>
          </div>
          <div
            className={`${styles.profileUserBioContainer} col-md-9 col-9 col-sm-9 d-flex flex-column align-items-center p-2 text-center`}
          >
            <p className={`${styles.profileUserBio}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga quibusdam nam tenetur dolor enim, laudantium eveniet quaerat
              obcaecati in deserunt autem ab unde ipsa dolores assumenda, error
              laboriosam veniam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Architecto error molestias officiis rem
              perferendis velit amet laudantium eligendi iusto. Dicta.
            </p>
          </div>
        </div>
        <div
          className={`${styles.profileMidContent} col-md-12 col-12 col-sm-12 d-flex flex-column align-items-center p-2 m-3`}
        >
          <div
            className={`${styles.counselorIntroVidContainer} col-md-12 col-sm-12 col-12 d-flex flex-column align-items-center`}
          >
            <div className="title col-md-12 col-sm-12 col-12 text-center">
              <h5>Counselor Introductory Videos</h5>
            </div>
            <div
              className={`${styles.counselorVideoWrapper} col-md-11 col-sm-11 col-11 p-4`}
            >
              <div
                className={`${styles.videoCard} col-md-2 col-2 col-sm-2 p-2`}
              >
                Video 1
              </div>
            </div>
            <div className={`${styles.addMoreVideo} m-3`}>
              <div className="title col-md-11 col-sm-11 col-11">
                <h5 className="text-center">Add More Introductory Videos</h5>
              </div>
              <div
                className={`${styles.addButton} col-md-11 col-sm-11 col-11 text-center`}
              >
                <IoIosAddCircle
                  size={80}
                  onClick={() => addMoreRef.current.click()}
                />
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ display: "none" }}
                  ref={addMoreRef}
                >
                  Launch demo modal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal/>
    </div>
  );
};

export default Profile;
