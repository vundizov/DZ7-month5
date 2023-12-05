import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    "fetchData",
    async function (info ,{dispatch}) {
        const response = await axios.get("https://dummyjson.com/products");
        const data = await response.data.products
        dispatch(getProducts(data))
    }
)

export const products = createSlice({
    name: 'products',
    initialState: {
        products: [],

    },
    reducers: {
        getProducts: (state, action) => {
            console.log(action.payload)
            state.products = action.payload
        }
    }
})


export const {getProducts} = products.actions
export const productReducer = products.reducer
