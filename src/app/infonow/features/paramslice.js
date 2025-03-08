import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count   : 0,
    lang    :"English",
    cat     : "all",
    page    : 1,  
}

const paramSlice = createSlice({
    name: 'param',
    initialState,
    reducers:{
        increment:(state)=> {
            state.count = state.count+1
        },
        decrement:(state)=> {
            state.count = state.count-1
        },
        uppage:(state)=>{
            state.page = state.page+1
        },
        downpage:(state)=>{
            state.page = state.page-1
        },
        resetpage:(state)=>{
            state.page = 1
        },
    }
})

export const {increment, decrement, uppage, downpage, resetpage} = paramSlice.actions
export default paramSlice.reducer