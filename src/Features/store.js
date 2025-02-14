// --------------------------------------------------------------------Imports-----------------------------------------------------------------
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { authenticationReducer } from "./Slices/Authentication/authenticationSlice";
import { blogReducer } from "./Slices/Blog/blogSlice";
import { counselorReducer } from "./Slices/Counselor/counselorSlice";
import { paymentReducer } from "./Slices/Payment/paymentSlice"; 
// --------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------Store Config--------------------------------------------------------------

// persistReducerConfiguration -- configuration for the redux-persist to transform and store in local storage
const persistReducerConfiguration = {
    key: "root",
    version: 1,
    storage,
    transforms: [encryptTransform({
        secretKey: `${process.env.REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
        onError: (error) => {
            console.error(`Redux Persist Transform Failed ${error.message}`)
        }
    })]
}

// reducer -- function which holds the redux state and combines all of them
const reducer = combineReducers({
    authentication: authenticationReducer,
    blog: blogReducer,
    counselor:counselorReducer,
    payment:paymentReducer
});

// rootReducer -- rootReducer is passed as the root reducer and also used for reseting the state
const rootReducer = (state, action) => {
    if (action.type == "authentication/clearReduxStoreData") {
        state = undefined;
        localStorage.clear();
        sessionStorage.clear();
    }
    return reducer(state, action);
}

// persistedReducer -- makes sure that the redux state is stored in the storage mentioned in the configuration
const persistedReducer = persistReducer(persistReducerConfiguration, rootReducer);

// store -- the actual redux store configuration
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
// ------------------------------------------------------------------------------------------------------------------------------------------
