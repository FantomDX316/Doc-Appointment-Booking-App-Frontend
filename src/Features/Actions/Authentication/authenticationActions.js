// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------


// login -- login action to call the login api and get the respective response
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


// signUp -- signUp action to call the signUp api and get the respective response
export const signUp = createAsyncThunk("authentication/signUp",async (payload,{rejectWithValue})=>{
    try {
        const response = await instance.post("/auth/signUp",payload,{
            headers:{
                "Content-Type":"application/json"
            }
        })

        return response?.data;
    } catch (error) {
        return rejectWithValue(error)
    }
});