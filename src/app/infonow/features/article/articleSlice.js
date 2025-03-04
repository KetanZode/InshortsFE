import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    articles : [],
    article :{}
}

export const ArticleSlice = createSlice({
    name: "article",
    initialState,
    reducers:{
        updatepanel: (state,action) =>{
            state.panel = action.payload
            console.log(state.panel)
        },
        createapi: (state, action) =>{

        }
    }
})

export const {updatepanel} = ArticleSlice.actions
export default ArticleSlice.reducer