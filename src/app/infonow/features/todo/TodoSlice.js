import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    var:0,
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addvar: (state, action) => {
            if (state.var === NaN){state.var=0}
            else{state.var += 1;}
        },
        decvar: (state, action) => {
            state.var -=1 ;
        },
        addval: (state, action) => {
            state.var += action.payload;
        }
    }
}
)

export const {addvar, decvar, addval} = todoSlice.actions

export default todoSlice.reducer