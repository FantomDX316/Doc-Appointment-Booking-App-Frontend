// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
import { jwtDecode } from "jwt-decode";
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------

// updateCounselor -- updateCounselor action to call the updateCounselor api and get the respective response
export const updateCounselor = createAsyncThunk(
  "counselor/updateCounselor",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/counselorDetails`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


