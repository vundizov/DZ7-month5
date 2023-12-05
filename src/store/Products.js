import data from '../json/data.json'
import {createSlice} from "@reduxjs/toolkit";



export const products = createSlice({
    name: 'product',
    initialState: {
        products: data,

    },
    reducers: {

    }
})


export const productAction = products.actions
export const productReducer = products.reducer
