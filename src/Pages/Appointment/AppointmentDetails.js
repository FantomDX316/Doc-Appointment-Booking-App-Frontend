// --------------------------------------------------------------Imports--------------------------------------------------
import React, { useEffect } from 'react'
import styles from "./AppointmentDetails.module.css"
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { resetPaymentStatus } from '../../Features/Slices/Payment/paymentSlice';
import { createPayment, verifyPayment } from '../../Features/Actions/Payment/paymentActions';

// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------

const AppointmentDetails = () => {
    // --------------------------------------------------------------States---------------------------------------------------
    const [newDate, setNewDate] = useState("");

    // ------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------Hooks---------------------------------------------------
    const { isOrderCreated, paymentData, isOrderVerified } = useSelector((state) => state?.payment);

    const dispatch = useDispatch();

    const options = {
        "key": `${process.env.REACT_APP_RAZORPAY_KEY_ID}`, // Enter the Key ID generated from the Dashboard
        "amount": "40000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "DOC App",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": `${paymentData?.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        handler: async (response) => {
            const razorpay_order_id = response.razorpay_order_id;
            const razorpay_payment_id = response.razorpay_payment_id;
            const razorpay_signature = response.razorpay_signature;

            const orderDetails = {
                amount: 4000,
                currency: "INR"
            }
            const paymentConfirmationData = { razorpay_order_id, razorpay_payment_id, razorpay_signature }

            dispatch(verifyPayment({ orderDetails, paymentConfirmationData, action: "verify", appointmentData: { dateNtime: newDate, counselorId: "DummyCounselorId" } }))
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    // ------------------------------------------------------------------------------------------------------------------------
    // --------------------------------------------------------------Functions---------------------------------------------------
    //   dateHandler -- handler to handle the date picked by the user
    const dateHandler = (date) => {
        try {
            setNewDate(date);
        } catch (error) {
            toast.error(error.message)
        }

    };


    // bookingHandler -- handler to to book the appointment
    const bookingHandler = () => {

        try {
            if (!newDate) {
                toast.error("Please Pick Date and Time for booking an appointment")
            } else {
                const orderDetails = {
                    amount: 4000,
                    currency: "INR"
                }
                const paymentConfirmationData = { razorpay_order_id: "", razorpay_payment_id: "", razorpay_signature: "" }

                dispatch(createPayment({ orderDetails, action: "create", paymentConfirmationData }))
            }
        }
        catch (error) {
            toast.error(error.message)
        }
    }

    // ------------------------------------------------------------------------------------------------------------------------
    // ----------------------------------------------------------useEffects-----------------------------------------------------
    useEffect(() => {
        if (isOrderCreated) {
            const razor = new window.Razorpay(options);
            razor.open();
            dispatch(resetPaymentStatus(false));
        };

        if (isOrderVerified) {
            dispatch(resetPaymentStatus(false));
        }
    }, [isOrderCreated, isOrderVerified])
    // ------------------------------------------------------------------------------------------------------------------------

    return (
        <div className={`${styles.appointmentDetailsContainer} p-5`}>
            <h1 className='text-center' style={{ color: "red", fontWeight: "bolder" }}>Appointment Details</h1>
            <div className="mainContent border p-5 my-4" style={{ boxShadow: "1px 1px 1px 1px green", borderRadius: "20px" }}>
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
                        {newDate && <p className='mt-2' style={{ color: "green" }}>Booking appointment for {`${new Date(newDate).getDate()}-${new Date(newDate).getMonth() + 1}-${new Date(newDate).getFullYear()}`}</p>}
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
