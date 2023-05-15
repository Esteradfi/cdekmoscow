import {createSlice} from "@reduxjs/toolkit";

export const contactsWidgetSlice = createSlice({
    name: "contactsWidget",
    initialState: {
        isOpen: false,
        contacts: [
            {
                id: "phone",
                name: "Телефон",
                link: "tel:+79687441054",
            },
            {
                id: "email",
                name: "Почта",
                link: "mailto:klo92@cdek.ru",
            },
            {
                id: "whatsapp",
                name: "WhatsApp",
                link: "https://wa.me/79687441054",
            },
        ],
    },
    reducers: {
        toggleWidget: (state, action) => {
            state.isOpen = !action.payload;
        }
    }
})

export const { toggleWidget } = contactsWidgetSlice.actions;
export default contactsWidgetSlice.reducer;