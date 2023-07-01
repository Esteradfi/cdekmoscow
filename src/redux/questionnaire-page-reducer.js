import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const postQuestionnaireThunk = createAsyncThunk(
    'postQuestionnaire',
    async (data) => {
        try {
            const response = await axios.post(`${API_URL}/mail/questionnaire`, data);
            return response.status;
        } catch (err) {
            console.error('Ошибка отправки данных:', err);
            alert(err.message);
        }
    }
)

export const questionnairePageSlice = createSlice({
    name: "Questionnaire page",
    initialState: {
        isWebStore: false,
        isFetching: false,
        isDone: false
    },
    reducers: {
        updateIsWebStore: (state, action) => {
            state.isWebStore = action.payload == "true";
        },
        startIsFetching: (state, action) => {
            state.isFetching = true;
        },
        endIsDone: (state, action) => {
            state.isDone = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postQuestionnaireThunk.fulfilled, (state, action) => {
                if (action.payload === 201) {
                    state.isFetching = false;
                    state.isDone = true;
                } else {
                    state.isFetching = false;
                }
            })
    }
})

export const {
    updateIsWebStore,
    startIsFetching,
    endIsDone
} = questionnairePageSlice.actions;
export default questionnairePageSlice.reducer;