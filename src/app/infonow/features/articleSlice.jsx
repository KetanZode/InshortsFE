import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, createData, updateData, deleteData } from "/src/api/api";
import { useDispatch } from "react-redux";


export const fetchArticles = createAsyncThunk("info/fetcharticle", async (val) => {
    const url = 'info/fetcharticle/'+"?"+val
  return await fetchData(url);
});

export const loadmoreArticles = createAsyncThunk("info/loadmorearticles", async (val) => {
    const url = 'info/fetcharticle/'+"?"+val
  return await fetchData(url);
});

export const createArticles = createAsyncThunk("info/createarticle", async (user) => {
  return await createData("users", {'data':'data'});
});

export const updateArticles = createAsyncThunk("info/updatearticle", async ({ id, user }) => {
  return await updateData("users", id, user);
});

export const deleteArticles = createAsyncThunk("info/deletearticle", async (id) => {
  await deleteData("users", id);
  return id;
});

const articleSlice = createSlice({
  name: "articles",
  initialState: { articles: [], status: "idle", error:'none', loading: 0 },
  reducers: {
    setLoading:(state)=>{state.loading=0}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        console.log(action.payload, state.articles)
        state.articles = action.payload
        state.loading = 100
        // state.articles = [...state.articles, ...action.payload];
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        console.log('the function is rejected')
        window.alert('No more items to scroll for this category')
        state.loading = 100
        // state.articles = [...state.articles, ...action.payload];
      })
      .addCase(fetchArticles.pending, (state, action) => {
        state.loading=20
        // state.articles = [...state.articles, ...action.payload];
      })
      .addCase(loadmoreArticles.fulfilled, (state, action) => {
        console.log(action.payload, state.articles)
        state.loading = 100
        // state.articles = action.payload
        state.articles = [...state.articles, ...action.payload];
      })
      .addCase(loadmoreArticles.pending, (state, action) => {
        state.loading=20
        // state.articles = [...state.articles, ...action.payload];
      })
      .addCase(loadmoreArticles.rejected, (state, action) => {
        console.log('the function is rejected')
        window.alert('No more items to scroll for this category')
        state.loading = 100
        
      })
      .addCase(createArticles.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      })
      .addCase(updateArticles.fulfilled, (state, action) => {
        const index = state.articles.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.articles[index] = action.payload;
      })
      .addCase(deleteArticles.fulfilled, (state, action) => {
        state.articles = state.articles.filter((u) => u.id !== action.payload);
      });
  },
});

export const {setLoading} = articleSlice.actions 

export default articleSlice.reducer;
