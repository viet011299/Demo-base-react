import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import globalReducer from './global/store';
const rootReduce = combineReducers({
    global: globalReducer,
});
const store = configureStore({
    reducer: rootReduce
});

export type AppDispatch = typeof store.dispatch;



export default store;
export type AppStore = typeof store;