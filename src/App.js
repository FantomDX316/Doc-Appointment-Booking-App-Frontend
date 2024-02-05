// ----------------------------------------------------------------Imports--------------------------------------------------------------
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import './App.css';
import Main from "./Layouts/Main/Main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Therapy from './Pages/Therapy/Therapy';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearReduxStoreData } from "./Features/Slices/Authentication/authenticationSlice";
import Counsellor from "./Pages/Counsellor/Counsellor";
import Profile from "./Pages/Profile/Profile";
import Blogs from "./Pages/Blog/Blogs";
import CreateBlog from "./Pages/Blog/CreateBlog";
import MyBlogs from "./Pages/Blog/MyBlogs";
import { CommonStateProvider } from "./Context/CommonContext/CommonStateProvider";
import BlogDetails from "./Pages/Blog/BlogDetails";
import { counselorChecker, isCounselorProfileUpdated } from "./utils/utilsIndex.js";
import CounselorsList from "./Pages/Counsellor/CounselorsList";

// ---------------------------------------------------------------------------------------------------------------------------------------


function App() {


  // ---------------------------------------------------------------States------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------Hooks------------------------------------------------------------------
  const { isUserLoggedIn, loggedInUserData } = useSelector((state) => state?.authentication)

  const dispatch = useDispatch()

  // ---------------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------Functions------------------------------------------------------------------


  // ---------------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------useEffect------------------------------------------------------------------
  useEffect(() => {
    if (!localStorage.getItem("bearerToken")) {
      dispatch(clearReduxStoreData());
    }
  }, [])

  // ---------------------------------------------------------------------------------------------------------------------------------------







  // ---------------------------------------------------------------------------------------------------------------------------------------

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Main />,
    children: [{
      path: "/",
      element: isUserLoggedIn ? <Home /> : <Navigate to="/login" />
    }, {
      path: "/login",
      element: !isUserLoggedIn ? <Login /> : <Navigate to="/" />
    }, {
      path: "/signup",
      element: !isUserLoggedIn ? <SignUp /> : <Navigate to="/" />
    }, {
      path: "/therapy",
      element: isUserLoggedIn ? !counselorChecker(loggedInUserData) ? <Therapy /> : <Navigate to="/" /> : <Navigate to="/login" />
    }, {
      path: "/counselor",
      element: isUserLoggedIn ? counselorChecker(loggedInUserData) ? isCounselorProfileUpdated(loggedInUserData) ? <Profile /> : <Counsellor /> : <Navigate to="/" /> : <Navigate to="/login" />
    },
    {
      path: "/counselors-list",
      element: isUserLoggedIn ? !counselorChecker(loggedInUserData) ? <CounselorsList /> : <Navigate to="/" /> : <Navigate to="/login" />
    }
      , {
      path: "/profile",
      element: isUserLoggedIn ? counselorChecker(loggedInUserData) ? isCounselorProfileUpdated(loggedInUserData) ? <Profile /> : <Counsellor /> : <Profile /> : <Navigate to="/login" />
    }
      , {
      path: "/blogs",
      element: isUserLoggedIn ? counselorChecker(loggedInUserData) ? isCounselorProfileUpdated(loggedInUserData) ? <Blogs /> : <Counsellor /> : <Blogs /> : <Navigate to="/login" />
    }
      , {
      path: "/create-blog",
      element: isUserLoggedIn ? counselorChecker(loggedInUserData) ? isCounselorProfileUpdated(loggedInUserData) ? <CreateBlog /> : <Counsellor /> : <Navigate to="/" /> : <Navigate to="/login" />
    }
      , {
      path: "/my-blogs",
      element: isUserLoggedIn ? counselorChecker(loggedInUserData) ? isCounselorProfileUpdated(loggedInUserData) ? <MyBlogs /> : <Counsellor /> : <Navigate to="/" /> : <Navigate to="/login" />
    }
      , {
      path: "/blog-details",
      element: isUserLoggedIn ? counselorChecker(loggedInUserData) ? isCounselorProfileUpdated(loggedInUserData) ? <BlogDetails /> : <Counsellor /> : <BlogDetails /> : <Navigate to="/login" />
    }

    ]
  }]);

  // ---------------------------------------------------------------------------------------------------------------------------------------


  // -----------------------------------------------------------------------------------------------------------------------------------------
  return (

    <>
      <CommonStateProvider>
        <RouterProvider router={appRouter}>
          <Main />
        </RouterProvider>
      </CommonStateProvider>
      <ToastContainer autoClose={1000} position="top-center" />
    </>


  )
}

export default App;
