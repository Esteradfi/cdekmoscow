import {createSlice} from "@reduxjs/toolkit";

export const offersSlice = createSlice({
    name: "Offers",
    initialState: {
        items: [
            {
                id: "o1",
                name: "Постаматы OmniCDEK",
                description: "Удобный способ бесконтактно получать посылки"
            },
            {
                id: "o2",
                name: "CDEK Фулфилмент",
                description: "Хранение и доставка для интернет-магазинов, отгрузка на маркетплейсы"
            },
            {
                id: "o3",
                name: "CDEK Документы",
                description: "Доставка деловой почты из-за рубежа в Россию"
            },
            {
                id: "o4",
                name: "CDEK Media",
                description: "Ваша видеореклама на экранах в пунктах выдачи CDEK"
            },
            {
                id: "o5",
                name: "CDEK Термо",
                description: "Доставка с сохранением температуры от -196 до +25 °C"
            },
            {
                id: "o6",
                name: "CDEK B2B",
                description: "Международные поставки коммерческих грузов в Россию"
            },
            {
                id: "o7",
                name: "СDEK Site",
                description: "Платформа для создания онлайн-витрины за 1 день"
            },
            {
                id: "o8",
                name: "CDEK отслеживание",
                description: "Мобильное приложение для отслеживания посылки"
            }
        ],
    },
    reducers: {}
})
export default offersSlice.reducer;