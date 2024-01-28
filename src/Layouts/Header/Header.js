// -----------------------------------------------------Imports-----------------------------------------------------------
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clearReduxStoreData } from '../../Features/Slices/Authentication/authenticationSlice';
import styles from "./Header.module.css"
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { useEffect } from 'react';
import { useContext } from 'react';
import { CommonStateContextObject } from '../../Context/CommonStateContext/CommonStateContextObject';
// ------------------------------------------------------------------------------------------------------------------------

const Header = () => {
  // -----------------------------------------------------States------------------------------------------------------------
  const blogArray = [{ path: "/blogs", value: "Blogs" },
  { path: "/my-blogs", value: "My Blogs" },
  { path: "/create-blog", value: "Create Blog" }]

  const [openMenu, setOpenMenu] = useState(false);
  // ------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Hooks------------------------------------------------------------
  const navigate = useNavigate();

  const location = useLocation();

  const { isUserLoggedIn } = useSelector(state => state?.authentication)

  const dispatch = useDispatch();

  const { changeNavbarState } = useContext(CommonStateContextObject)

  // ------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------Functions------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------useEffects------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------------------------------

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.headerContent} row align-items-center justify-content-center`}>
        <div className={`${styles.navLogo} col-md-4 col-sm-4 col-4 d-flex align-items-center justify-content-center`} >
          <svg onClick={() => { navigate("/") }} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="60%" height="60%" fill="none" viewBox="0 0 82 40"><path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path><path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path><path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path><path fill="#171A26" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path></svg>
        </div>

        {!openMenu ? <div className={`${styles.hamburgerMenu} col-md-7 col-sm-7 col-7 d-flex flex-row-reverse`} onClick={() => { setOpenMenu(!openMenu); changeNavbarState(); }}>
          <GiHamburgerMenu color='black' />
        </div> : <div className={`${styles.hamburgerMenu} col-md-7 col-sm-7 col-7 d-flex flex-row-reverse`} onClick={() => { setOpenMenu(!openMenu); changeNavbarState(); }}>
          <GiCrossMark color='red' />
        </div>}
        <div className={`${styles.navTabs} col-md-8 col-sm-8 col-8 d-flex align-items-center justify-content-start`}>
          {Array(3).fill(0).map(() => {
            return (<div className={`${styles.navTab} col-md-2`}>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "white", border: "0px", color: "black" }}>
                  Drop
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>)
          })}
          <div className={`${styles.navTab} col-md-2`}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "white", border: "0px", color: "black" }}>
                Blog
              </button>
              <ul className="dropdown-menu">
                {
                  blogArray.map((blogItem) => {
                    return (<>

                      <li><Link className="dropdown-item" to={blogItem?.path}>{blogItem?.value}</Link></li>
                    </>

                    )
                  })
                }
              </ul>
            </div>
          </div>

          {!isUserLoggedIn ? <div className={`${styles.loginButton} col-md-4 d-flex justify-content-center`}>
            {location?.pathname == "/login" ? <button type="button" className="btn btn-danger" style={{ borderRadius: "100px", padding: "10px", letterSpacing: "3px" }} onClick={() => {
              navigate("/signup")
            }}>SIGN UP</button> : <button type="button" className="btn btn-danger" style={{ borderRadius: "100px", padding: "10px", letterSpacing: "3px" }} onClick={() => {
              navigate("/login")
            }}>LOG IN</button>}
          </div> : <div className={`${styles.loginButton} col-md-4 d-flex justify-content-center`}>
            {<button type="button" className="btn btn-danger" style={{ borderRadius: "100px", padding: "10px", letterSpacing: "3px" }} onClick={() => {
              dispatch(clearReduxStoreData())
            }}>LOGOUT</button>}

          </div>}
        </div>

      </div>
    </div>
  )
}

export default Header
