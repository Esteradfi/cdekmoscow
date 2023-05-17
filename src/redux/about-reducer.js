import {createSlice} from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
    name: "About",
    initialState: {
        items: [
            {
                id: "a1",
                name: "Выкупаемость",
                description: "До 95% заказов в зависимости от сферы бизнеса"
            },
            {
                id: "a3",
                name: "Оперативность",
                description: "Доставка по России от 2 дней"
            },
            {
                id: "a5",
                name: "Экономия",
                description: "Отправка по договору от 135 рублей"
            },
            {
                id: "a7",
                name: "Удобство",
                description: "Доставка в пункт выдачи, постамат или лично в руки получателю\n"
            },
            {
                id: "a9",
                name: "География",
                description: "Уникальная сеть офисов: более 3500 по России"
            },
            {
                id: "a2",
                name: "Интеграция",
                description: "Бесплатная установка виджета CDEK на сайте"
            },
            {
                id: "a4",
                name: "Поддержка 24/7",
                description: "Горячая линия, удобное информирование"
            },
            {
                id: "a6",
                name: "Открытость",
                description: "Работа с персональным менеджером по всем вопросам"
            },
            {
                id: "a8",
                name: "Безграничность",
                description: "Доставка товаров для ваших клиентов за рубежом, импорт и экспорт грузов"
            },
            {
                id: "a10",
                name: "Развитие",
                description: "Помощь с выходом на маркетплейсы"
            }
        ],
    },
    reducers: {}
})
export default aboutSlice.reducer;