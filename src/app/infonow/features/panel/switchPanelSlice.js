import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    panel : "admin"
}

export const PanelSlice = createSlice({
    name: "panel",
    initialState,
    reducers:{
        updatepanel: (state,action) =>{
            state.panel = action.payload
            console.log(state.panel)
        }
    }
})

export const {updatepanel} = PanelSlice.actions
export default PanelSlice.reducer