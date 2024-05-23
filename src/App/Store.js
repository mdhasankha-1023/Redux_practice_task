import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counters/CountersSlice'
import contentsReducer from "../Features/ContentsData/ContentsDataSlice";

const store = configureStore({
    reducer: {
        counters: counterReducer,
        contents: contentsReducer 
    }
})

export default store;