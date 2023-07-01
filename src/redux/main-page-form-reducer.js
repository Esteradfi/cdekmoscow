import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const postFeedbackThunk = createAsyncThunk(
    'postFeedback',
    async (data) => {
        try {
            const response = await axios.post(`${API_URL}/mail/feedback`, data);
            return response.status;
        } catch (err) {
            console.error('Ошибка отправки данных:', err);
            alert(err.message);
        }
    }
)
export const mainPageFormSlice = createSlice({
    name: "MainPage form",
    initialState: {
        isFetching: false,
        isDone: false
    },
    reducers: {
        startIsFetching: (state, action) => {
            state.isFetching = true;
        },
        endIsDone: (state, action) => {
            state.isDone = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postFeedbackThunk.fulfilled, (state, action) => {
                if (action.payload === 201) {
                    state.isFetching = false;
                    state.isDone = true;
                } else {
                    state.isFetching = false;
                }
            })
    }
})

export const {startIsFetching, endIsDone} = mainPageFormSlice.actions;
export default mainPageFormSlice.reducer;