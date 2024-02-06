// ---------------------------------------------------------------Imports------------------------------------------------------------
import React, { useEffect } from "react";
import styles from "./Home.module.css";
import docImg from "../../Assets/Images/homeDocImg.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getBlogs } from "../../Features/Actions/Blog/blogActions";
import { useDispatch, useSelector } from "react-redux";
import { counselorChecker } from "../../utils/utilsIndex";
// -----------------------------------------------------------------------------------------------------------------------------------

const Home = () => {
  // --------------------------------------------------------------Hooks----------------------------------------------------------------
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loggedInUserData } = useSelector((state) => state?.authentication);

  // ----------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------Functions-------------------------------------------

  // fetchBlogsData -- function call the blog api to fetch the blog data
  const fetchBlogsData = async (param) => {
    try {
      const blogsData = await dispatch(getBlogs(param));
    } catch (error) {
      toast.error(error.message);
    }
  };
  // ----------------------------------------------------------------------------------------------------------

  // ------------------------------------------------------useEffects-------------------------------------------
  useEffect(() => {
    fetchBlogsData("0");
  });
  // ----------------------------------------------------------------------------------------------------------
  return (
    <div className={`${styles.homeContainer}`}>
      <div className={`${styles.homeWrapper} row p-4`}>
        <div className={`${styles.homeContent} col-md-6 col-sm-6 col-12 p-4`}>
          <div className={`${styles.homeContentWrapper}`}>
            <h1 className="text-center">
              Book Appointment and Trust us with that
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              similique nulla necessitatibus dignissimos doloribus quis quam
              dolor fuga corrupti vel. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos perspiciatis at reprehenderit id
              exercitationem earum numquam, ipsam ad dolorum itaque rem repellat
              neque blanditiis pariatur possimus iure consequuntur voluptatem
              ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit, voluptatum. Ipsum voluptatum ut cupiditate accusantium, et
              aliquam,
            </p>
            <div
              className={`${styles.seeMoreBtn} col-md-12 col-sm-12 col-12 text-center`}
            >
              <input
                style={{ letterSpacing: "5px", fontFamily: "monospace" }}
                type="button"
                name="See More"
                value="See More"
                onClick={() => {
                  counselorChecker(loggedInUserData)
                    ? navigate("/profile")
                    : navigate("/therapy");
                }}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.homeImage} col-md-6 col-sm-6 col-12`}>
          <div
            className={`${styles.homeImageWrapper} d-flex align-items-center`}
          >
            <img src={docImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
