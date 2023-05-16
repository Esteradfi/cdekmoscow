import {configureStore} from "@reduxjs/toolkit";
import contactsWidgetReducer from "./contacts-widget-reducer";
import {useDispatch} from "react-redux";
import headerFooterReducer from "./header-footer-reducer";

export default configureStore({
    reducer: {
        contactsWidget: contactsWidgetReducer,
        headerFooter: headerFooterReducer,
    },
    devTools: true,
})

export const useStoreDispatch = () => useDispatch();