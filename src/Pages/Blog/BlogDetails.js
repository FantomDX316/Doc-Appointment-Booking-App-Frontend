// ------------------------------------------------------------Imports------------------------------------------------------
import React from "react";
import styles from "./BlogDetails.module.css";
import bgImg from "../../Assets/Images/bgImg.jpg";
import profileImg from "../../Assets/Images/defaultProfileImage.jpg";
import { useLocation } from "react-router-dom";
// --------------------------------------------------------------------------------------------------------------------------

const BlogDetails = () => {
  // ---------------------------------------------------------Hooks---------------------------------------------------------
  const location = useLocation();

  const blog = location?.state?.blog || {};

  // --------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="container">
      <div className="row p-5">
        <div
          className={`${styles.blogTitle} col-md-12 col-12 col-sm-12 text-center`}
        >
          <h1>{blog?.title || "N.A"}</h1>
        </div>
        <div className="blogCreatorDetails col-md-12 col-12 col-sm-12">
          <div
            className={`${styles.blogCreatorDetailsWrapper} d-flex align-items-center justify-content-start col-md-12 col-12 col-sm-12`}
          >
            <div className={`${styles.blogCreatorImageWrapper} col-md-2`}>
              <div
                className={`${styles.blogCreatorImage}`}
                style={{ backgroundImage: `url(${profileImg})` }}
              ></div>
            </div>
            <div
              className={`${styles.blogCreatorDetail} d-flex align-items-center justify-content-start col-md-10`}
            >
              <h5>Creator name</h5>
            </div>
          </div>
        </div>
        <div className={`${styles.blogImage} col-md-12 col-12 col-sm-12`}>
          <img src={bgImg} />
        </div>
        <div className="blogDescription col-md-12 col-12 col-sm-12 mt-3">
          <div
            className={`${styles.blogDescWrapper} col-md-12 col-sm-12 col-12 d-flex justify-content-center p-3`}
          >
            <h4>{blog?.description || "N.A"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
