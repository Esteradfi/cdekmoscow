import {createSlice} from "@reduxjs/toolkit";

export const mainPageFormSlice = createSlice({
    name: "MainPage form",
    initialState: {
        name: "",
        email: "",
        phone: "",
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
            console.log(state.name)
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePhone: (state, action) => {
            state.phone = action.payload;
        }
    }
})

export const { updateName, updateEmail, updatePhone } = mainPageFormSlice.actions;
export default mainPageFormSlice.reducer;