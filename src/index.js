// ----------------------------------------------------------------Imports------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Therapy from './Pages/Therapy/Therapy';

// ------------------------------------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------------------------------------


const appRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Home />
  }, {
    path: "/login",
    element: <Login />
  }, {
    path: "/signup",
    element: <SignUp />
  }, {
    path: "/therapy",
    element: <Therapy />
  }]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
