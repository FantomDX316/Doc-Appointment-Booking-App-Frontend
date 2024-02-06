// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { updateCounselor } from "../../Actions/Counselor/counselorActions";
// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
  isCounselorLoading: false,
  counselorData: {},
  errorMessage: "",
  isCounselorUpdated: false,
  
};

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const counselorSlice = createSlice({
  name: "counselor",
  initialState,
  reducers: {
    resetCounselorState: (state, action) => {
      state.isCounselorUpdated = action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // createBlog  lifecycle actions
      .addCase(updateCounselor.pending, (state, action) => {
        state.isCounselorLoading = true;
        state.errorMessage = "";
        state.isCounselorUpdated = false;
      })
      .addCase(updateCounselor.fulfilled, (state, action) => {
        state.isCounselorLoading = false;
        state.isCounselorUpdated = true;
        state.counselorData = action?.payload?.counselor;
        toast.success("Counselor Details Updated Successfully");
      })
      .addCase(updateCounselor.rejected, (state, action) => {
        state.isCounselorLoading = false;
        state.errorMessage = action?.payload?.message;
        state.isCounselorUpdated = false;
      });
  },
});

export const counselorReducer = counselorSlice.reducer;
export const { resetCounselorState } = counselorSlice.actions;
