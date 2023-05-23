import { createSlice } from "@reduxjs/toolkit";


const carouselSlice = createSlice({
    name: "carousel",
    initialState: {
        isTrue: false
    },
    reducers: {
        open: (state) => {
            state.isTrue = true
        },
        close: (state) => {
            state.isTrue = false
        }
    }
})


export const { open, close } = carouselSlice.actions

export default carouselSlice.reducer