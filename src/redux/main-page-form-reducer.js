import {createSlice} from "@reduxjs/toolkit";

export const mainPageFormSlice = createSlice({
    name: "MainPage form",
    initialState: {
        name: "",
        email: "",
        phone: "",
        isAgree: false
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updatePhone: (state, action) => {
            state.phone = action.payload;
        },
        changeIsAgree: (state, action) => {
            state.isAgree = !action.payload;
        }
    }
})

export const { updateName, updateEmail, updatePhone, changeIsAgree } = mainPageFormSlice.actions;
export default mainPageFormSlice.reducer;