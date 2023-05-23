import { configureStore } from "@reduxjs/toolkit";
import leftNavbarSlice from "./leftNavbarSlice";
import cartSlice from "./cartSlice";
import carouselSlice from "./carouselSlice";

const store = configureStore({
    reducer: {
        navbar: leftNavbarSlice,
        cart: cartSlice,
        carousel: carouselSlice
    }
})

export default store