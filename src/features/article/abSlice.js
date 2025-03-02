// src/mySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apicall } from '../../api/AxiosServicesSlice';


// Define the async action using createAsyncThunk
export const fetchData = createAsyncThunk('', async () => {
  const response = await apicall('fetcharticle');
  const data = await response.json();
  return data; // return the payload
});

// Create a slice for your state and reducers
const mySlice = createSlice({
  name: 'myData',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // the fetched data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mySlice.reducer;
