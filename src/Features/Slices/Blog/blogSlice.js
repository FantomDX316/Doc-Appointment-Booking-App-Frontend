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
    isBlogCreated: false
}

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        resetBlogState: (state, action) => {
            state.isBlogCreated = action?.payload;
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
                state.isBlogCreated = false;

            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.isBlogLoading = false;
                state.blogData = action?.payload
                state.isBlogCreated = true;

                toast.success("Blog Created Successfully")
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.isBlogLoading = false;
                state.errorMessage = action?.payload?.message;
                state.isBlogCreated = false;

            })

    }
})

export const blogReducer = blogSlice.reducer;
export const { resetBlogState } = blogSlice.actions;