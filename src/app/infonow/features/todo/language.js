import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    language : "English",
}

export const languageSlice = createSlice({
    name:'lang',
    initialState,
    reducers: {
        updatelang: (state, action) =>{
            state.language = action.payload;
            console.log(state.language)
        }
    }
})

export const {updatelang} = languageSlice.actions

export default languageSlice.reducer