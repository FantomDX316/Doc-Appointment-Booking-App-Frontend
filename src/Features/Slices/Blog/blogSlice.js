// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createBlog } from "../../Actions/Blog/blogActions";
// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
    isBlogLoading: false,
    blogData: {},
    errorMessage: "",
}

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        resetBlogState: (state, action) => {
        },
        clearReduxStoreData: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder

            // login  lifecycle actions
            .addCase(createBlog.pending, (state, action) => {
                state.isBlogLoading = true;
                state.loggedInUserData = {};
                state.errorMessage = "";

            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isBlogLoading = false;
                state.blogData = action?.payload
                toast.success("Blog Created Successfully")
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isBlogLoading = false;
                state.errorMessage = action?.payload?.message;
            })

    }
})

export const blogReducer = blogSlice.reducer;
export const { } = blogSlice.actions;