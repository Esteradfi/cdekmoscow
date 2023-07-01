import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import DonePopup from "../../../common/DonePopup/DonePopup";
import {postOrderCallThunk, startIsFetching, endIsDone} from "../../../../redux/order-call-reducer";

const RequestCall = (props) => {
    let dispatch = useDispatch();
    let isFetching = useSelector(state => state.orderCall.isFetching);
    let isDone = useSelector(state => state.orderCall.isDone);

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onChange"
    });

    const onSubmit = (data) => {
        dispatch(startIsFetching());
        if (data.date.length === 0) {
            delete data.date;
        }
        dispatch(postOrderCallThunk(data));
        reset({
            name: '',
            phone: '',
            date: '',
            agreement: false
        });
    }

    if (isDone) {
        setTimeout(() => dispatch(endIsDone()), 3000);
    }

    return (
        <div>
            {isFetching && <Preloader/>}
            {isDone && <DonePopup/>}
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
                        Удобное время для связи (по московскому времени)
                        <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                    </label>
                    <input type="datetime-local" placeholder="Удобные дата и время" className={"verticalInput"}
                        {...register('date')}/>
                </div>
                <div className="verticalInputBlock">
                    <label htmlFor="agreement" className="custom-checkboxes">
                        <input type="checkbox" id="agreement"
                               {...register('agreement', {
                                   required: "Обязательное поле",
                               })}/>
                        <span className="custom-checkboxes-span"></span>
                        <span className="horizontalFormSpan">«Я даю согласие на обработку персональных данных и соглашаюсь c <a
                            className="formBlockLink"
                            target="_blanc"
                            href="https://www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%9F%D0%94%D0%BD_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_01_09_22.pdf">политикой конфиденциальности</a>»
                        </span>
                    </label>
                </div>
                <input className={"verticalSubmit"} type="submit" disabled={!isValid} value="Заказать звонок"/>
            </form>
        </div>
    )
}

export default RequestCall;