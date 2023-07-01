import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {endIsDone, postQuestionnaireSelfThunk, startIsFetching} from "../../redux/questionnaire-self-page-reducer";
import styles from "./QuestionnaireSelfPage.module.css";
import Preloader from "../common/Preloader/Preloader";
import DonePopup from "../common/DonePopup/DonePopup";

const QuestionnaireSelfPage = (props) => {
    let questionnaireSelfState = useSelector(state => state.questionnaireSelfPage);

    let dispatch = useDispatch();

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

        dispatch(postQuestionnaireSelfThunk(data));
        reset({
            fullName: '',
            email: '',
            phone: '',
            factAddress: '',
            Inn: '',
            check: '',
            website: '',
            agreement: false
        });
    }

    if (questionnaireSelfState.isDone) {
        setTimeout(() => dispatch(endIsDone()), 3000);
    }

    return (
        <section className="section ">
            <article className="container ">
                {questionnaireSelfState.isFetching && <Preloader/>}
                {questionnaireSelfState.isDone && <DonePopup/>}
                <h2 className="articleTitle">Анкета для самозанятых</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={"verticalForm"}>
                    <div className="verticalInputBlock">
                        <label htmlFor="fullName" className={"verticalLabel"}>
                            ФИО
                        </label>
                        <input id="fullName" className={"verticalInput"}
                               type="text" autoComplete="name" placeholder="Иван Петров"
                               {...register('fullName', {
                                   required: "Обязательное поле", minLength: {
                                       value: 1,
                                       message: "Минимум 1 символ"
                                   }
                               })}/>
                        {errors?.fullName &&
                            <p className="errorMessage">{errors?.fullName?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="factAddress" className={"verticalLabel"}>
                            Фактический адрес. Для отправки бух. документов
                        </label>
                        <input id="factAddress"
                               className={"verticalInput"} type="text"
                               placeholder="Фактический адрес"
                               {...register('factAddress', {
                                   required: "Обязательное поле", minLength: {
                                       value: 5,
                                       message: "Минимум 5 символов"
                                   }
                               })}/>
                        {errors?.factAddress &&
                            <p className="errorMessage">{errors?.factAddress?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="Inn" className={"verticalLabel"}>
                            ИНН
                            <small className={"verticalSmall"}>(Формат: 10-12 арабских цифр)</small>
                        </label>
                        <input id="Inn" className={"verticalInput"}
                               type="text" placeholder="Ваш ИНН"
                               {...register('Inn', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\d+]{10,12}$/,
                                       message: "Некорректный ИНН"
                                   }
                               })}/>
                        {errors?.Inn &&
                            <p className="errorMessage">{errors?.Inn?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="phone" className={"verticalLabel"}>
                            Телефон
                            <small className={"verticalSmall"}>(Например: +7900000000)</small>
                        </label>
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
                        <label htmlFor="email" className={"verticalLabel"}>
                            E-mail
                            <small className={"verticalSmall"}>(Например: example@gmail.com)</small>
                        </label>
                        <input id="email" className={"verticalInput"}
                               type="email" placeholder="Ваш E-mail"
                               {...register('email', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                       message: "Некорректная почта"
                                   }
                               })}/>
                        {errors?.email &&
                            <p className="errorMessage">{errors?.email?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="website" className={"verticalLabel"}>
                            Сайт
                            <small className={"verticalSmall"}>(Например: https://example.com)</small>
                        </label>
                        <input name="website" id="website"
                               className={"verticalInput"} type="url" placeholder="Ссылка на сайт, соц. сети, маркет-плейсы, др. площадки"
                               {...register('website', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                                       message: "Некорректный адрес"
                                   },
                               })}/>
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="check" className={"verticalLabel"}>
                            Реквизиты карты / счёта
                            <small className={"verticalSmall"}>(Формат: 20 арабских цифр)</small>
                        </label>
                        <input id="check" className={"verticalInput"} type="text"
                               placeholder="Банковские реквизиты карты / счёта"
                               {...register('check', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^(?:[\. ]*\d){20}$/,
                                       message: "Некорректные реквизиты карты / счёта"
                                   }
                               })}/>
                        {errors?.check &&
                            <p className="errorMessage">{errors?.check?.message || "Ошибка заполнения"}</p>}
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

export default QuestionnaireSelfPage;