// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
import { jwtDecode } from "jwt-decode";
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------

// createPayment -- createPayment action to call the createPayment api and get the respective response
export const createPayment = createAsyncThunk(
    "payment/createPayment",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await instance.post(`/createPayment`, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return response?.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
