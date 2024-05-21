import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Features/Counters/CountersSlice'

const store = configureStore({
    reducer: {
        counters: counterReducer 
    }
})

export default store;