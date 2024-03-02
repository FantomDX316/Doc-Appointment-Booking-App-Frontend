// --------------------------------------------------------------Imports--------------------------------------------------
import React from 'react'
import styles from "./AppointmentDetails.module.css"
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { toast } from 'react-toastify';

// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------

const AppointmentDetails = () => {
    // --------------------------------------------------------------States---------------------------------------------------
    const [dateArray, setDateArray] = useState([]);
    const [newDate, setNewDate] = useState();
    // ------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------Functions---------------------------------------------------
    //   dateHandler -- handler to handle the date picked by the user
    const dateHandler = (date) => {
        console.log("this is the date", date);
        setDateArray([...dateArray, date.toISOString()]);
        setNewDate(date);
    };

    // bookingHandler -- handler to to book the appointment
    const bookingHandler = () => {

        try {
            if(!newDate){
                toast.error("Please Pick Date and Time for booking an appointment")
            }
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    // ------------------------------------------------------------------------------------------------------------------------

    return (
        <div className={`${styles.appointmentDetailsContainer} p-5`}>
            <h1 className='text-center'>Appointment Details</h1>
            <div className="mainContent border p-3">
                <h4 className='text-center'>Pick Appointment Date and Time</h4>
                <div className="datePicker col-md-12 col-sm-12 col-12 d-flex flex-column align-items-center justify-content-center">
                    <div className={`col-md-8 col-8 col-sm-8 text-center`}>
                        <DatePicker
                            minDate={new Date()}
                            filterDate={(date) =>
                                date.getDay() !== 6 && date.getDay() !== 0
                            }
                            showYearDropdown
                            scrollableMonthYearDropdown
                            className={`${styles.selectElement} col-md-10 col-sm-10 col-10 m-2 p-2`}
                            onChange={dateHandler}
                            selected={newDate}
                            showTimeSelect
                        />
                    </div>
                    <div className={`${styles.bookBtn}`}>
                        <button className='' onClick={bookingHandler}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentDetails;
