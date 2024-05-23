import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getContentsData } from "./ContentsApi";


// initial stats
const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    error: null
}

// create thank
export const fetchData = createAsyncThunk('contents/fetchData', async ()=> {
    const  data = await getContentsData()
    return data
})

const contentsDataSlice = createSlice({
    name: 'contents',
    initialState,
    extraReducers: (builder)=> {
        builder
        .addCase(fetchData.pending, (state)=> {
            state.isError = false;
            state.isLoading = true;

        })
        .addCase(fetchData.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload
        })
        .addCase(fetchData.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message
        })
    }
})

export default contentsDataSlice.reducer;