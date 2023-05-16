import {configureStore} from "@reduxjs/toolkit";
import contactsWidgetReducer from "./contacts-widget-reducer";
import {useDispatch} from "react-redux";
import headerReducer from "./header-reducer";

export default configureStore({
    reducer: {
        contactsWidget: contactsWidgetReducer,
        header: headerReducer,
    },
    devTools: true,
})

export const useStoreDispatch = () => useDispatch();