import {configureStore} from "@reduxjs/toolkit";
import contactsWidgetReducer from "./contacts-widget-reducer";
import {useDispatch} from "react-redux";

export default configureStore({
    reducer: {
        contactsWidget: contactsWidgetReducer,
    },
    devTools: true,
})

export const useStoreDispatch = () => useDispatch();