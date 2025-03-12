import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, fetchPostData, createData, updateData, deleteData } from "/src/api/api";
import { useDispatch } from "react-redux";

export const fetchModels = createAsyncThunk('fetchmodels', async (val)=>{
    const url = "fetchmodels/"
    return await fetchData(url)
}) 

export const fetchDiagram = createAsyncThunk('fetchdiagram', async (val)=> {
    const url = "fetchdiagram/"
    return await fetchPostData(url, val)
})

const modelSlice = createSlice({
    name:"models",
    initialState: {models:[], diagram:null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            
            .addCase(fetchModels.fulfilled, (state, action)=>{
                state.models = action.payload.models
                console.log(state.models)
            })

            .addCase(fetchModels.rejected, (state, action)=>{
                windowPane.alert('bad Request')
            })
            
            .addCase(fetchDiagram.fulfilled, (state, action)=>{
                state.diagram = action.payload
                console.log(state.models.models)
            })

            .addCase(fetchDiagram.rejected, (state, action)=>{
                windowPane.alert('bad Request')
            })

    }
});

export default modelSlice.reducer;