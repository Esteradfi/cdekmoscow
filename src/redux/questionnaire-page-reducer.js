import {createSlice} from "@reduxjs/toolkit";

export const questionnairePageSlice = createSlice({
    name: "Questionnaire page",
    initialState: {
        name: "",
        phone: "",
        organizationName: "",
        inn: "",
        legalAddress: "",
        certificateNumber: "",
        certificateIssueDate: "",
        bik: "",
        checkingAccount: "",
        directorName: "",
        email: "",
        comment: "",
        pointAddress: "",
        city: "",
        isWebStore: false,
        webStore: "",
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updatePhone: (state, action) => {
            state.phone = action.payload;
        },
        updateOrganizationName: (state, action) => {
            state.organizationName = action.payload;
        },
        updateInn: (state, action) => {
            state.inn = action.payload;
        },
        updateLegalAddress: (state, action) => {
            state.legalAddress = action.payload;
        },
        updateCertificateNumber: (state, action) => {
            state.certificateNumber = action.payload;
        },
        updateCertificateIssueDate: (state, action) => {
            state.certificateIssueDate = action.payload;
        },
        updateBik: (state, action) => {
            state.bik = action.payload;
        },
        updateCheckingAccount: (state, action) => {
            state.checkingAccount = action.payload;
        },
        updateDirectorName: (state, action) => {
            state.directorName = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateComment: (state, action) => {
            state.comment = action.payload;
        },
        updatePointAddress: (state, action) => {
            state.pointAddress = action.payload;
        },
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateIsWebStore: (state, action) => {
            state.isWebStore = action.payload;
        },
        updateWebStore: (state, action) => {
            state.webStore = action.payload;
        },
    }
})

export const {
    updateName,
    updateEmail,
    updateOrganizationName,
    updateInn,
    updateLegalAddress,
    updateCertificateNumber,
    updateCertificateIssueDate,
    updateBik,
    updateCheckingAccount,
    updateDirectorName,
    updatePhone,
    updateComment,
    updatePointAddress,
    updateCity,
    updateIsWebStore,
    updateWebStore
} = questionnairePageSlice.actions;
export default questionnairePageSlice.reducer;