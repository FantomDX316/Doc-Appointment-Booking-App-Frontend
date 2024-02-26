// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createPayment } from "../../Actions/Payment/paymentActions";

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
  isPaymentLoading: false,
  paymentData: {},
  errorMessage: "",
};

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    resetCounselorState: (state, action) => {
      state.isCounselorUpdated = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // createPayment  lifecycle actions
      .addCase(createPayment.pending, (state, action) => {
        state.isPaymentLoading = true;
        state.errorMessage = "";
        state.isCounselorUpdated = false;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.isPaymentLoading = false;
        state.paymentData = action?.payload;
        toast.success("Order Created Successfully");
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.isPaymentLoading = false;
        state.errorMessage = action?.payload;
      })
      
  },
});

export const paymentReducer = paymentSlice.reducer;
export const { resetCounselorState } = paymentSlice.actions;
