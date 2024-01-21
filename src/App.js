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

// ---------------------------------------------------------------------------------------------------------------------------------------


function App() {


  // ---------------------------------------------------------------States------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------Hooks------------------------------------------------------------------
  const { isUserLoggedIn, loggedInUserData } = useSelector((state) => state?.authentication)

  const dispatch = useDispatch()

  // ---------------------------------------------------------------------------------------------------------------------------------------
  // -------------------------------------------------------------Functions------------------------------------------------------------------

  // counsellorChecker -- function to check whether the logged in user is a counsellor or not
  const counsellorChecker = () => {
    if (loggedInUserData?.decodedData?.role?.toString()?.trim() === "Counsellor") {
      return true
    } else {
      return false
    }
  }

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
      element: isUserLoggedIn ? (!counsellorChecker()? <Therapy />:<Navigate to="/"/>) : <Navigate to="/login" />
    }, {
      path: "/counsellor",
      element: isUserLoggedIn ? (counsellorChecker()? <Counsellor />:<Navigate to="/"/>) : <Navigate to="/login" />
    }
      , {
      path: "/profile",
      element: isUserLoggedIn ? <Profile /> : <Navigate to="/login" />
    }
      , {
      path: "/blogs",
      element: isUserLoggedIn ? <Blogs/> : <Navigate to="/login" />
    }
      , {
      path: "/create-blog",
      element: isUserLoggedIn ? <CreateBlog/> : <Navigate to="/login" />
    }

    ]
  }]);

  // ---------------------------------------------------------------------------------------------------------------------------------------


  // -----------------------------------------------------------------------------------------------------------------------------------------
  return (

    <>
      <RouterProvider router={appRouter}>
        <Main />
      </RouterProvider>
      <ToastContainer autoClose={1000} position="top-center" />
    </>


  )
}

export default App;
