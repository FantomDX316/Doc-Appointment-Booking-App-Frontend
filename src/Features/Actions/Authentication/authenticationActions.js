// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------

export const login = createAsyncThunk("authentication/login",async (payload,{rejectWithValue})=>{
    try {
        const response = await instance.post("/auth/login",payload,{
            headers:{
                "Content-Type":"application/json"
            }
        })

        return response?.data;
    } catch (error) {
        return rejectWithValue(error)
    }
});