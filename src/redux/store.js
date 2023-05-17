import {configureStore} from "@reduxjs/toolkit";
import contactsWidgetReducer from "./contacts-widget-reducer";
import {useDispatch} from "react-redux";
import headerFooterReducer from "./header-footer-reducer";
import aboutReducer from "./about-reducer";
import offersReducer from "./offers-reducer";

export default configureStore({
    reducer: {
        contactsWidget: contactsWidgetReducer,
        headerFooter: headerFooterReducer,
        about: aboutReducer,
        offers: offersReducer,
    },
    devTools: true,
})

export const useStoreDispatch = () => useDispatch();