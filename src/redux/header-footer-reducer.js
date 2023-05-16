import {createSlice} from "@reduxjs/toolkit";

export const headerFooterSlice = createSlice({
    name: "header-footer",
    initialState: {
        isOpen: false,
        year: "2023",
    },
    reducers: {
        toggleBurger: (state, action) => {
            state.isOpen = !action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        }
    },
})

export const { toggleBurger, setYear } = headerFooterSlice.actions;
export default headerFooterSlice.reducer;