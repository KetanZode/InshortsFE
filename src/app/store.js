import { configureStore } from "@reduxjs/toolkit";

import todoReducer from  '../features/todo/TodoSlice'
import languageReducer from '../features/todo/language'
import PanelReducer from '../features/panel/switchPanelSlice'
// import ArticleReducer from '../features/article/NewArtSlice'
import ArticleReducer from '../features/articleSlice'
import apicallReducer from '../features/article/abSlice'
import paramReducer from '../features/paramslice/'
import errorReducer from '../features/errorSlice/'


export const store = configureStore({
    reducer: {
        todo    : todoReducer,
        lang    : languageReducer,
        panel   : PanelReducer,
        articles : ArticleReducer,
        call    : apicallReducer,
        param   : paramReducer,
        errormsg   : errorReducer,
    }
})