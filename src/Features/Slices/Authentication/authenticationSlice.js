// ---------------------------------------------------------Imports-------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../Actions/Authentication/authenticationActions";
// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------
const initialState = {
    isLoginLoading: false,
    isSignUpLoading: false,
    loggedInUserData: {},
    isUserLoggedIn: false,
    errorMessage:""
}

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------Authentication Slice----------------------------------------------------------

const loginSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            // login  lifecycle actions
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
                state.isUserLoggedIn = false;
                state.loggedInUserData = {};
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isUserLoggedIn = true;
                state.loggedInUserData = action?.payload

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
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.isSignUpLoading = false;
                state.isUserLoggedIn = false;
                state.loggedInUserData = action?.payload

            })
            .addCase(signUp.rejected, (state, action) => {
                state.isSignUpLoading = false;
                state.isUserLoggedIn = false;
                state.loggedInUserData = {};
                state.errorMessage = action?.payload?.message;
            })
    }
})