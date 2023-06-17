import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const calcDeliveryCostThunk = createAsyncThunk(
    'calcDeliveryCostThunk',
    async (data) => {
        try {
            const response = await axios.post(`${API_URL}/sdek/calculator`, data);
            return response.data;
        } catch (err) {
            console.error('Failed to fetch tariffs:', err);
            alert(err.message);
        }
    }
)

export const getCitiesThunk = createAsyncThunk(
    'getCitiesThunk',
    async () => {
        try {
            const response = await axios.get(`${API_URL}/sdek/cities`);
            return response.data;
        } catch (err) {
            console.error('Failed to fetch cities:', err);
        }
    }
)

export const calcSlice = createSlice({
    name: "Calculator",
    initialState: {
        fromLocation: 0,
        fromLocationName: "",
        toLocation: 0,
        toLocationName: "",
        length: "",
        width: "",
        height: "",
        weight: "",
        insurance: "",
        isFetching: false,
        cities: [],
        searchResultsFromLocation: [],
        searchResultsToLocation: [],
        tariffsList: [],
        tariffsIsOpen: false,
        insuranceCost: 0,
    },
    reducers: {
        updateFromLocationName: (state, action) => {
            state.fromLocationName = action.payload;
        },
        updateFromLocation: (state, action) => {
            state.fromLocation = action.payload;
        },
        updateToLocationName: (state, action) => {
            state.toLocationName = action.payload;
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
        },
        updateSearchResultsFromLocation: (state, action) => {
            state.searchResultsFromLocation = action.payload;
        },
        updateSearchResultsToLocation: (state, action) => {
            state.searchResultsToLocation = action.payload;
        },
        changeIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        changeTariffsIsOpen: (state, action) => {
            state.tariffsIsOpen = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCitiesThunk.fulfilled, (state, action) => {
                state.cities = action.payload;
            })
            .addCase(calcDeliveryCostThunk.fulfilled, (state, action) => {
                state.isFetching = false;
                if (action.payload) {
                    state.tariffsList = action.payload.tariff_codes;
                    state.insuranceCost = action.payload.insurance_cost;
                    state.tariffsIsOpen = true;
                }
            })
    }
})

export const {
    updateFromLocationName,
    updateFromLocation,
    updateToLocationName,
    updateToLocation,
    updateLength,
    updateWidth,
    updateHeight,
    updateWeight,
    updateInsurance,
    updateSearchResultsToLocation,
    updateSearchResultsFromLocation,
    changeIsFetching,
    changeTariffsIsOpen
} = calcSlice.actions;
export default calcSlice.reducer;