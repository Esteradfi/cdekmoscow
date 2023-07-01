import {useDispatch, useSelector} from "react-redux";
import styles from "./ContractPage.module.css";
import {useForm} from "react-hook-form";
import {endIsDone, postContractThunk} from "../../redux/contract-page-reducer";
import {startIsFetching} from "../../redux/contract-page-reducer";
import Preloader from "../common/Preloader/Preloader";
import DonePopup from "../common/DonePopup/DonePopup";


const ContractPage = (props) => {
    let dispatch = useDispatch();
    let isDone = useSelector(state => state.contractPage.isDone);
    let isFetching = useSelector(state => state.contractPage.isFetching);

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
        if (data.comments.length === 0) {
            delete data.comments;
        }

        if (data.email.length === 0) {
            delete data.email;
        }

        dispatch(postContractThunk(data));
        reset({
            fullName: '',
            email: '',
            phone: '',
            comments: '',
            agreement: false
        });
    }

    if (isDone) {
        setTimeout(() => dispatch(endIsDone()), 3000);
    }

    return (
        <section className={"section"}>
            <article className="container ">
                {isFetching && <Preloader/>}
                {isDone && <DonePopup/>}
                <form onSubmit={handleSubmit(onSubmit)} className={"verticalForm"}>
                    <div className="verticalInputBlock">
                        <label htmlFor="fullName" className={"verticalLabel"}>
                            ФИО
                        </label>
                        <input id="fullName" className={"verticalInput"} type="text" autoComplete="name"
                               placeholder="Ваше имя"
                               {...register('fullName', {
                                   required: "Обязательное поле", minLength: {
                                       value: 1,
                                       message: "Минимум 1 символ"
                                   }
                               })}/>
                        {errors?.name && <p className="errorMessage">{errors?.name?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="email" className={"verticalLabel"}>
                            E-mail
                            <small className={"verticalSmall"}>(Например: example@gmail.com)</small>
                        </label>
                        <input id="email" className={"verticalInput"} type="email" placeholder="Ваш E-mail"
                               {...register('email', {
                                   pattern: {
                                       value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                       message: "Некорректная почта"
                                   }
                               })}/>
                        {errors?.email &&
                            <p className="errorMessage">{errors?.email?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="phone" className={"verticalLabel"}>
                            Телефон
                            <small className={"verticalSmall"}>(Например: +7900000000)</small>
                        </label>
                        <input id="phone" className={"verticalInput"} type="tel" autoComplete="tel"
                               placeholder="Ваш телефон для связи"
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
                        <label htmlFor="comments" className={"verticalLabel"}>
                            Комментарий
                            <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                        </label>
                        <textarea id="comments" className={"verticalTextarea"}
                                  {...register('comments')}></textarea>
                    </div>
                    <div className={styles.checkboxBlock}>
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
                    <input className={"verticalSubmit"} type="submit" disabled={!isValid}/>
                </form>
            </article>
        </section>
    )
}

export default ContractPage;