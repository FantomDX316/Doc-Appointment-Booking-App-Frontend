// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createBlog, getBlogs } from "../../Actions/Blog/blogActions";
// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
  isBlogLoading: false,
  blogData: [],
  errorMessage: "",
  isBlogCreated: false,
};

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    resetBlogState: (state, action) => {
      state.isBlogCreated = action?.payload;
    },
    clearReduxStoreData: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder

      // createBlog  lifecycle actions
      .addCase(createBlog.pending, (state, action) => {
        state.isBlogLoading = true;
        state.errorMessage = "";
        state.isBlogCreated = false;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isBlogLoading = false;
        state.isBlogCreated = true;

        toast.success("Blog Created Successfully");
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isBlogLoading = false;
        state.errorMessage = action?.payload?.message;
        state.isBlogCreated = false;
      })

      // getBlogs  lifecycle actions
      .addCase(getBlogs.pending, (state, action) => {
        state.isBlogLoading = true;
        state.errorMessage = "";
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isBlogLoading = false;
        state.blogData = action?.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isBlogLoading = false;
        state.errorMessage = action?.payload?.message;
      });
  },
});

export const blogReducer = blogSlice.reducer;
export const { resetBlogState } = blogSlice.actions;
