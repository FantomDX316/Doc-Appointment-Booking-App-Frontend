// --------------------------------------------------------------------Imports----------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../../Services/axiosInterceptor";
import { jwtDecode } from "jwt-decode";
// -------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------Authentication Actions--------------------------------------------------------

// createBlog -- createBlog action to call the createBlog api and get the respective response
export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/createBlog`, payload, {
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

// getBlogs -- getBlogs action to call the getBlogs api and get the respective response
export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (param, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/getBlogs/${param}`, {
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

//getCounselorBlogs -- getCounselorBlogs in order to fetch the counselor blogs
export const getCounselorBlogs = createAsyncThunk(
  "blog/getCounselorBlogs",
  async (param, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/getBlogs/${param}`, {
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
