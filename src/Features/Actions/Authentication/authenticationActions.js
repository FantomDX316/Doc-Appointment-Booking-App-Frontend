// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
import { jwtDecode } from "jwt-decode"
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------


// login -- login action to call the login api and get the respective response
export const login = createAsyncThunk("authentication/login", async (payload, { rejectWithValue }) => {
    try {
        const response = await instance.post("/login", payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        let decodedData = {};
        if (response?.status == 201 || response?.status == 200) {
            let token = response?.data?.message;
            localStorage.setItem("bearerToken", token)
            decodedData = jwtDecode(token);
        }
        return { ...response?.data, decodedData };
    } catch (error) {
        return rejectWithValue(error)
    }
});


// signUp -- signUp action to call the signUp api and get the respective response
export const signUp = createAsyncThunk("authentication/signUp", async ({ payload, role }, { rejectWithValue }) => {
    try {
        const response = await instance.post(`${role === "User" ? "/profile" : role === "Counselor" ? "/profile" : ""}`, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return response?.data;
    } catch (error) {
        return rejectWithValue(error)
    }
});