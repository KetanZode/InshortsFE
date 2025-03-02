import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name            : 'error',
    initialState    : "msg",
    reducers        :{
        remsg : (state) => "change",
        setmsg: (state,action) => action
    } 
})

export const {remsg,setmsg} = errorSlice.actions
export default errorSlice.reducer  
