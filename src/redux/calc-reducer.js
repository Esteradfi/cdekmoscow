import {createSlice} from "@reduxjs/toolkit";

export const calcSlice = createSlice({
    name: "Calculator",
    initialState: {
        fromLocation: "",
        toLocation: "",
        length: "",
        width: "",
        height: "",
        weight: "",
        insurance: "",
        isFetching: false
    },
    reducers: {
        updateFromLocation: (state, action) => {
            state.fromLocation = action.payload;
        },
        updateToLocation: (state, action) => {
            state.toLocation = action.payload;
        },
        updateLength: (state, action) => {
            state.length = action.payload;
        },
        updateWidth: (state, action) => {
            state.width = action.payload;
        },
        updateHeight: (state, action) => {
            state.height = action.payload;
        },
        updateWeight: (state, action) => {
            state.weight = action.payload;
        },
        updateInsurance: (state, action) => {
            state.insurance = action.payload;
        }
    }
})

export const {
    updateFromLocation,
    updateToLocation,
    updateLength,
    updateWidth,
    updateHeight,
    updateWeight,
    updateInsurance
} = calcSlice.actions;
export default calcSlice.reducer;