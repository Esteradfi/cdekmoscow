import {createSlice} from "@reduxjs/toolkit";

export const sliderSlice = createSlice({
    name: "slider",
    initialState: {
        items: [
            {
                id: "p1",
                name: "TOPBRANDS"
            },
            {
                id: "p2",
                name: "TOY.RU"
            },
            {
                id: "p3",
                name: "ДОЧКИ СЫНОЧКИ"
            },
            {
                id: "p4",
                name: "LA REDOUTE"
            },
            {
                id: "p5",
                name: "ALIEXPRESS"
            },
            {
                id: "p6",
                name: "COLIN'S"
            },
            {
                id: "p7",
                name: "САКС"
            },
            {
                id: "p8",
                name: "AVON"
            },
            {
                id: "p9",
                name: "QUIKSILVER"
            },
            {
                id: "p10",
                name: "MOTHERCARE"
            },
            {
                id: "p11",
                name: "АЛАНТ"
            },
            {
                id: "p12",
                name: "CONVERSE"
            },
            {
                id: "p13",
                name: "HOLODILNIK.RU"
            },
            {
                id: "p14",
                name: "СНЕЖНАЯ КОРОЛЕВА"
            },
            {
                id: "p15",
                name: "KUPIVIP.RU"
            },
            {
                id: "p16",
                name: "ЛЕОНАРДО"
            },
            {
                id: "p17",
                name: "POMPA"
            },
            {
                id: "p18",
                name: "VICTORIA'S SECRET"
            },
        ]
    },
    reducers: {
    },
})
export default sliderSlice.reducer;