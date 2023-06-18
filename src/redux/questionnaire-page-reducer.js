import {createSlice} from "@reduxjs/toolkit";

export const questionnairePageSlice = createSlice({
    name: "Questionnaire page",
    initialState: {
        isWebStore: false,
    },
    reducers: {
        updateIsWebStore: (state, action) => {
            state.isWebStore = action.payload === "Yes";
        },
    }
})

export const {
    updateIsWebStore,
} = questionnairePageSlice.actions;
export default questionnairePageSlice.reducer;