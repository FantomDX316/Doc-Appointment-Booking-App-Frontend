// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
import { jwtDecode } from "jwt-decode"
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------

// createBlog -- createBlog action to call the createBlog api and get the respective response
export const createBlog = createAsyncThunk("blog/createBlog", async (payload, { rejectWithValue }) => {
    try {
        const response = await instance.post(`/createBlog`, payload, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        return response?.data;
    } catch (error) {
        return rejectWithValue(error)
    }
});