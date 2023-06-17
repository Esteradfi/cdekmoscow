import {createSlice} from "@reduxjs/toolkit";

export const contractPageSlice = createSlice({
    name: "ContractPage",
    initialState: {
        name: "",
        email: "",
        phone: "",
        comment: "",
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
        updateComment: (state, action) => {
            state.comment = action.payload;
        },
        changeIsAgree: (state, action) => {
            state.isAgree = !action.payload;
        }
    }
})

export const { updateName, updateEmail, updatePhone, updateComment, changeIsAgree } = contractPageSlice.actions;
export default contractPageSlice.reducer;