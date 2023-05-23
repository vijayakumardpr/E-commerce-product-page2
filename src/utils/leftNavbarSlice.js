import { createSlice } from "@reduxjs/toolkit";


const leftNavbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        isShow: false
    },
    reducers: {
        toggle: (state) => {
            state.isShow = !state.isShow
        }
    }
})

export const { toggle } = leftNavbarSlice.actions
export default leftNavbarSlice.reducer