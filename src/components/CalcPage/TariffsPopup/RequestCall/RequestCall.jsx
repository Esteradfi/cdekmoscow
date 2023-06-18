import {useForm} from "react-hook-form";

const RequestCall = (props) => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
        props.onRequestCall();
    }
    return (
        <div>
            <h2>Заказать звонок</h2>
            <form className={"verticalForm"} onSubmit={handleSubmit(onSubmit)}>
                <div className="verticalInputBlock">
                    <label htmlFor="name" className={"verticalLabel"}>Имя</label>
                    <input id="name" className={"verticalInput"}
                           type="text" autoComplete="name" placeholder="Иван Петров"
                           {...register('name', {
                               required: "Обязательное поле", minLength: {
                                   value: 1,
                                   message: "Минимум 1 символ"
                               }
                           })}/>
                    {errors?.name && <p className="errorMessage">{errors?.name?.message || "Ошибка заполнения"}</p>}
                </div>
                <div className="verticalInputBlock">
                    <label htmlFor="phone" className={"verticalLabel"}>Телефон</label>
                    <input id="phone" className={"verticalInput"}
                           type="tel" autoComplete="tel" placeholder="Контактный телефон"
                           {...register('phone', {
                               required: "Обязательное поле",
                               pattern: {
                                   value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                   message: "Некорректный номер телефона"
                               }
                           })}/>
                    {errors?.phone &&
                        <p className="errorMessage">{errors?.phone?.message || "Ошибка заполнения"}</p>}
                </div>
                <div className="verticalInputBlock">
                    <label htmlFor="" className={"verticalLabel"}>
                        Удобное время для связи
                        <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                    </label>
                    <input type="text" placeholder="Удобные дата и время" className={"verticalInput"}/>
                </div>
                <div className="verticalInputBlock">
                    <label htmlFor="agreement" className="custom-checkboxes">
                        <input type="checkbox" id="agreement"
                               {...register('agreement', {
                                   required: "Обязательное поле",
                               })}/>
                        <span className="custom-checkboxes-span"></span>
                        <span className="horizontalFormSpan">Согласие на обработку персональных данных</span>
                    </label>
                </div>
                <input className={"verticalSubmit"} type="submit" disabled={!isValid} value="Заказать звонок"/>
            </form>
        </div>
    )
}

export default RequestCall;