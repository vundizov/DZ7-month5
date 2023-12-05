import {configureStore} from "@reduxjs/toolkit";
import { productReducer} from "./Products.js";
import productsInBasketSlice from "./productsInBasketSlice.js";

export const store = configureStore({
    reducer:{
      product:productReducer,
        productsInBasketReducer: productsInBasketSlice
    }
})
