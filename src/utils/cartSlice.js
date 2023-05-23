import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isShow: false,
        count: 0,
        intoCart: false
    },
    reducers: {
        showCart: (state) => {
            state.isShow = !state.isShow;
        },
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            if (state.count === 0) return
            state.count = state.count - 1;
        },
        clear: (state) => {
            state.count = 0
        },
        intoCart: (state) => {
            state.intoCart = true
        }
    }
})

export const { showCart, increment, decrement, clear, intoCart } = cartSlice.actions

export default cartSlice.reducer
