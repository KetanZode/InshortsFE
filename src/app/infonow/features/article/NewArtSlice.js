import { createSlice } from "@reduxjs/toolkit";
import { apicall } from '../../api/AxiosServicesSlice';


const initialState  = {
    articles: ["abcd","check"]
}



export const ArtSlice = createSlice({
    name:'art',
    initialState,
    reducers: {
        refresh : (state, action)=>{
            const res = apicall('fetcharticle')
            state.articles = res
        }
    }
})



export const {refresh} = ArtSlice.actions
export default ArtSlice.reducer