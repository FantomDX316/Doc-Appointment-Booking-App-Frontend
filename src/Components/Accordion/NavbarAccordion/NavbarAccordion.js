// -----------------------------------------------------------------Imports----------------------------------------------------
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./NavbarAccordion.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearReduxStoreData } from "../../../Features/Slices/Authentication/authenticationSlice";
import { CommonStateContextObject } from "../../../Context/CommonContext/CommonStateContextObject";
// ----------------------------------------------------------------------------------------------------------------------------

const NavbarAccordion = ({ index }) => {
  // -------------------------------------------------------------------States---------------------------------------------------
  const blogArray = [
    { path: "/blogs", value: "Blogs" },
    { path: "/my-blogs", value: "My Blogs" },
    { path: "/create-blog", value: "Create Blog" },
  ];
  // ---------------------------------------------------------------Hooks---------------------------------
  const { isUserLoggedIn } = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { changeNavbarState, changeMenu } = useContext(
    CommonStateContextObject
  );

  // -------------------------------------------------------------------Functions---------------------------------------------------
  // ----------------------------------------------------------------------------------------------------------------------------
  return (
    <div
      className={`${styles.accordionContainer} accordion accordion-flush`}
      id="accordionFlushExample"
    >
      <div
        className={`${styles.accordionWrapper} accordion-item p-3`}
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/profile");
          changeNavbarState();
          changeMenu();
        }}
      >
        Profile
      </div>
      <div className={`${styles.accordionWrapper} accordion-item`}>
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${index}`}
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Blog
          </button>
        </h2>
        <div
          id={`flush-collapse${index}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${index}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <ul style={{padding:"0px"}}>
              {blogArray.map((blogItem) => {
                return (
                  <>
                    <li >
                      <div
                        className="dropdown-item"
                        onClick={() => {
                          navigate(`${blogItem?.path}`);
                          changeNavbarState();
                          changeMenu();
                        }}
                        style={{cursor:"pointer",border:"1px solid #DCDCDC",margin:"10px 0px 10px 0px",padding:"5px",borderRadius:"5px"}}
                      >
                        {blogItem?.value}
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {Array(2)
        .fill(0)
        .map((_, index) => {
          return (
            <div className={`${styles.accordionWrapper} accordion-item`}>
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <ul>
                    <li>hello</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}

      {!isUserLoggedIn ? (
        <div
          className={`${styles.loginButton} col-md-4 d-flex justify-content-center`}
        >
          {location?.pathname == "/login" ? (
            <button
              type="button"
              className="btn btn-danger"
              style={{
                borderRadius: "100px",
                padding: "10px",
                letterSpacing: "3px",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              SIGN UP
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger"
              style={{
                borderRadius: "100px",
                padding: "10px",
                letterSpacing: "3px",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              LOG IN
            </button>
          )}
        </div>
      ) : (
        <div
          className={`${styles.loginButton} col-md-4 d-flex justify-content-center`}
        >
          {
            <button
              type="button"
              className="btn btn-danger"
              style={{
                borderRadius: "100px",
                padding: "10px",
                letterSpacing: "3px",
              }}
              onClick={() => {
                dispatch(clearReduxStoreData());
                changeNavbarState();
                changeMenu();
              }}
            >
              LOGOUT
            </button>
          }
        </div>
      )}
    </div>
  );
};

export default NavbarAccordion;
