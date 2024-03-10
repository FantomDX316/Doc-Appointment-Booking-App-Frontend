// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createPayment, verifyPayment } from "../../Actions/Payment/paymentActions";

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
    isPaymentLoading: false,
    paymentData: {},
    errorMessage: "",
    isOrderCreated: false,
    isOrderVerified: false
};

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        resetPaymentStatus: (state, action) => {
            state.isOrderCreated = action?.payload;
            state.isOrderVerified = action?.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            // createPayment  lifecycle actions
            .addCase(createPayment.pending, (state, action) => {
                state.isPaymentLoading = true;
                state.errorMessage = "";
                state.isOrderCreated = false;
            })
            .addCase(createPayment.fulfilled, (state, action) => {
                state.isPaymentLoading = false;
                state.paymentData = action?.payload;
                state.isOrderCreated = true;
                toast.success("Order Created Successfully");
            })
            .addCase(createPayment.rejected, (state, action) => {
                state.isPaymentLoading = false;
                state.errorMessage = action?.payload;
                state.isOrderCreated = false;

            })
            // verifyPayment  lifecycle actions
            .addCase(verifyPayment.pending, (state, action) => {
                state.isPaymentLoading = true;
                state.errorMessage = "";
                state.isOrderVerified = false;
            })
            .addCase(verifyPayment.fulfilled, (state, action) => {
                state.isPaymentLoading = false;
                state.paymentData = action?.payload;
                state.isOrderVerified = true;
                toast.success("Order Verified Successfully");
            })
            .addCase(verifyPayment.rejected, (state, action) => {
                state.isPaymentLoading = false;
                state.errorMessage = action?.payload;
                state.isOrderVerified = false;

            })

    },
});

export const paymentReducer = paymentSlice.reducer;
export const { resetPaymentStatus } = paymentSlice.actions;
