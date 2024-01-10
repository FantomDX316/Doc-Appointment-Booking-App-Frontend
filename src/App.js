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
// ---------------------------------------------------------------------------------------------------------------------------------------


function App() {


  // ---------------------------------------------------------------States------------------------------------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------------
  // ---------------------------------------------------------------Hooks------------------------------------------------------------------
  const { isUserLoggedIn } = useSelector((state) => state?.authentication)

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
      element: isUserLoggedIn ? <Therapy /> : <Navigate to="/login" />
    },{
      path:"/counsellor",
      element: isUserLoggedIn ? <Counsellor /> : <Navigate to="/login" />
    }]
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
