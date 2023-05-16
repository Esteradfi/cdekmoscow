import {createSlice} from "@reduxjs/toolkit";

export const headerSlice = createSlice({
    name: "header",
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleBurger: (state, action) => {
            state.isOpen = !action.payload;
        }
    }
})

export const { toggleBurger } = headerSlice.actions;
export default headerSlice.reducer;