// packages
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// api
import baseApi from './api/base';
// 
import rootReducer from './rootReducer';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(baseApi.middleware),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

export default store;