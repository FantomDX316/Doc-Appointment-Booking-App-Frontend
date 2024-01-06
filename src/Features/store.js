// --------------------------------------------------------------------Imports-----------------------------------------------------------------
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { authenticationReducer } from "./Slices/Authentication/authenticationSlice";
// --------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------Store Config--------------------------------------------------------------

// persistReducerConfiguration -- configuration for the redux-persist
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

// reducer -- function which holds the redux state and combines all of em 
const reducer = combineReducers({
    authentication: authenticationReducer
});

// rootReducer -- rootReducer is passed as the root reducer and also used for reseting the state
const rootReducer = (state, action) => {
    return reducer(state, action);
}

// persistedReducer -- makes sure that the redux state is stored in the storage mentioned in the configuration
const persistedReducer = persistReducer(persistReducerConfiguration, rootReducer);

// store -- the actual redux store configuration
export const store = configureStore({
    reducer: persistedReducer
})

// --------------------------------------------------------------------------------------------------------------------------------------------
