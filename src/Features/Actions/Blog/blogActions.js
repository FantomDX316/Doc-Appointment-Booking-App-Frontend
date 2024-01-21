// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
import { jwtDecode } from "jwt-decode"
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------

// createBlog -- createBlog action to call the createBlog api and get the respective response
export const createBlog = createAsyncThunk("blog/createBlog", async ({ payload, role }, { rejectWithValue }) => {
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