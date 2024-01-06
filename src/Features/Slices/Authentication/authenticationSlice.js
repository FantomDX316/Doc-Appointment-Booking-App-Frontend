// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, signUp } from "../../Actions/Authentication/authenticationActions";
// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
    isLoginLoading: false,
    isSignUpLoading: false,
    loggedInUserData: {},
    isUserLoggedIn: false,
    errorMessage: "",
    isUserCreated: false
}

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        resetSignUpState: (state, action) => {
            state.isUserCreated = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder

            // login  lifecycle actions
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
                state.isUserLoggedIn = false;
                state.loggedInUserData = {};
                state.errorMessage = "";

            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isUserLoggedIn = true;
                state.loggedInUserData = action?.payload
                toast.success("Logged In Successfully")
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isUserLoggedIn = false;
                state.loggedInUserData = {};
                state.errorMessage = action?.payload?.message;
            })
            // signUp lifecycle actions
            .addCase(signUp.pending, (state, action) => {
                state.isSignUpLoading = true;
                state.isUserLoggedIn = false;
                state.loggedInUserData = {};
                state.isUserCreated = false
                state.errorMessage = "";


            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isSignUpLoading = false;
                state.isUserLoggedIn = false;
                state.isUserCreated = true

                toast.success("User Created Successfully")

            })
            .addCase(signUp.rejected, (state, action) => {
                state.isSignUpLoading = false;
                state.isUserLoggedIn = false;
                state.loggedInUserData = {};
                state.isUserCreated = false
                state.errorMessage = action?.payload?.message;
            })
    }
})

export const authenticationReducer = authenticationSlice.reducer;
export const { resetSignUpState } = authenticationSlice.actions;