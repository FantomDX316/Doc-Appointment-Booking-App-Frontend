// ----------------------------------------------------------------Imports--------------------------------------------------------------
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Main from "./Layouts/Main/Main";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ---------------------------------------------------------------------------------------------------------------------------------------


function App() {

  // -----------------------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ToastContainer autoClose={1000} position="top-center" />
    </>
  )
}

export default App;
