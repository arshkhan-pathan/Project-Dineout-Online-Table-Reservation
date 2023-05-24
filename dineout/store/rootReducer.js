// packages
import { combineReducers } from '@reduxjs/toolkit';
// slices
import authReducer from './slices/auth';
// api
import baseApi from './api/base';


const rootReducer = combineReducers({
    'auth': authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    // add other reducers here
});

export default rootReducer;