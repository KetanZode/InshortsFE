import { configureStore } from "@reduxjs/toolkit";

import todoReducer from  '/src/app/infonow/features/todo/TodoSlice'
import languageReducer from '/src/app/infonow/features/todo/language'
import PanelReducer from '/src/app/infonow/features/panel/switchPanelSlice'
// import ArticleReducer from '../features/article/NewArtSlice'
import ArticleReducer from '/src/app/infonow/features/articleSlice'
import apicallReducer from '/src/app/infonow/features/article/abSlice'
import paramReducer from '/src/app/infonow/features/paramslice/'
import errorReducer from '/src/app/infonow/features/errorSlice/'
import modelReducer from '../app/modelsdiagram/modelSlice'


export const store = configureStore({
    reducer: {
        todo    : todoReducer,
        lang    : languageReducer,
        panel   : PanelReducer,
        articles : ArticleReducer,
        call    : apicallReducer,
        param   : paramReducer,
        errormsg   : errorReducer,
        models  : modelReducer
    }
})