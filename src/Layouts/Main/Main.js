// ---------------------------------------------------------------Imports-----------------------------------------------------------------
import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { CommonStateContextObject } from '../../Context/CommonStateContext/CommonStateContextObject'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
// ----------------------------------------------------------------------------------------------------------------------------------------


const Main = () => {
    // -----------------------------------------------------------------Hooks-----------------------------------------------------------------
    const { isUserLoggedIn } = useSelector(state => state?.authentication);

    const { openNavbar } = useContext(CommonStateContextObject)
    // ----------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------Functions---------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------------------------------------------------------

    return (
        isUserLoggedIn ? <div>
            <Header />
            {openNavbar && <SideBar />}
            <Outlet />
            <Footer />
        </div> : <div>
            <Outlet />
        </div>
    )
}

export default Main
