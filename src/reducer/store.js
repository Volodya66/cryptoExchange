import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./modalReducer/modalSlice";







export const store = configureStore({
    reducer: {
        modal: modalReducer,
  
    }  
})

