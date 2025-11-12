import { configureStore, createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name : "count",
    initialState : {
        count : 0,
    },
    reducers : {
        increment : (state,action) => {
            state.count += action.payload
        }
    }
})


const store = configureStore({
    reducer : {
        count : countSlice.reducer
    }
})

export const {increment} = countSlice.actions;

export default store