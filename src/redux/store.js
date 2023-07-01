import {configureStore} from "@reduxjs/toolkit";
import contactsWidgetReducer from "./contacts-widget-reducer";
import {useDispatch} from "react-redux";
import headerFooterReducer from "./header-footer-reducer";
import aboutReducer from "./about-reducer";
import offersReducer from "./offers-reducer";
import mainPageFormReducer from "./main-page-form-reducer";
import sliderReducer from "./slider-reducer";
import contractPageReducer from "./contract-page-reducer";
import questionnairePageReducer from "./questionnaire-page-reducer";
import calcReducer from "./calc-reducer";
import orderCallReducer from "./order-call-reducer";
import questionnaireSelfPageReducer from "./questionnaire-self-page-reducer";

export default configureStore({
    reducer: {
        contactsWidget: contactsWidgetReducer,
        headerFooter: headerFooterReducer,
        about: aboutReducer,
        offers: offersReducer,
        mainPageForm: mainPageFormReducer,
        slider: sliderReducer,
        contractPage: contractPageReducer,
        questionnairePage: questionnairePageReducer,
        questionnaireSelfPage: questionnaireSelfPageReducer,
        calc: calcReducer,
        orderCall: orderCallReducer,
    },
    devTools: true,
})

export const useStoreDispatch = () => useDispatch();