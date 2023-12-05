import {createSlice} from "@reduxjs/toolkit";

const productsInBasketSlice = createSlice({
    name: "productsInBasketSlice",
    initialState: {
        products: [],
        productsAmount: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.productsAmount = state.productsAmount + 1;
            state.products.push(action.payload)
        }
    }
})

export const {addProduct} = productsInBasketSlice.actions
export default productsInBasketSlice.reducer