import {useDispatch, useSelector} from "react-redux";
import {
    postQuestionnaireThunk,
    updateIsWebStore,
    endIsDone, startIsFetching
} from "../../redux/questionnaire-page-reducer";
import styles from "./QuestionnairePage.module.css";
import {useForm} from "react-hook-form";
import Preloader from "../common/Preloader/Preloader";
import DonePopup from "../common/DonePopup/DonePopup";


const QuestionnairePage = (props) => {
    let questionnaireState = useSelector(state => state.questionnairePage);
    let isWebStore = questionnaireState.isWebStore;

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
        if (data.registrationCertificateNumber.length === 0) {
            delete data.registrationCertificateNumber;
        }
        if (data.registrationCertificateDate.length === 0) {
            delete data.registrationCertificateDate;
        }
        if (data.comment.length === 0) {
            delete data.comment;
        }
        data.isOnlineStore = questionnaireState.isWebStore;
        if (data.website.length === 0) {
            delete data.website;
        }

        dispatch(postQuestionnaireThunk(data));
        reset({
            contactPerson: '',
            email: '',
            phone: '',
            comments: '',
            organizationName: '',
            organizationInn: '',
            legalAddress: '',
            registrationCertificateNumber: '',
            registrationCertificateDate: '',
            bankBik: '',
            organizationAccount: '',
            directorFullName: '',
            returnAddress: '',
            isOnlineStore: false,
            city: '',
            website: '',
            agreement: false
        });
    }

    if (questionnaireState.isDone) {
        setTimeout(() => dispatch(endIsDone()), 3000);
    }

    const onNewIsWebStore = (e) => {
        let newIsWebStore = e.target.value;
        dispatch(updateIsWebStore(newIsWebStore));
    }

    return (
        <section className={"section "}>
            <article className="container ">
                {questionnaireState.isFetching && <Preloader/>}
                {questionnaireState.isDone && <DonePopup/>}
                <form onSubmit={handleSubmit(onSubmit)} className={"verticalForm"}>
                    <div className="verticalInputBlock">
                        <label htmlFor="contactPerson" className={"verticalLabel"}>
                            Контактное лицо
                        </label>
                        <input id="contactPerson" className={"verticalInput"}
                               type="text" autoComplete="name" placeholder="Иван Петров"
                               {...register('contactPerson', {
                                   required: "Обязательное поле", minLength: {
                                       value: 1,
                                       message: "Минимум 1 символ"
                                   }
                               })}/>
                        {errors?.contactPerson &&
                            <p className="errorMessage">{errors?.contactPerson?.message || "Ошибка заполнения"}</p>}
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
                        <label htmlFor="organizationName" className={"verticalLabel"}>
                            Наименование
                        </label>
                        <input id="organizationName"
                               className={"verticalInput"} type="text"
                               placeholder="Введите наименование организации"
                               {...register('organizationName', {
                                   required: "Обязательное поле", minLength: {
                                       value: 1,
                                       message: "Минимум 1 символ"
                                   }
                               })}/>
                        {errors?.organizationName &&
                            <p className="errorMessage">{errors?.organizationName?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="organizationInn" className={"verticalLabel"}>
                            ИНН
                            <small className={"verticalSmall"}>(Формат: 10-12 арабских цифр)</small>
                        </label>
                        <input id="organizationInn" className={"verticalInput"}
                               type="text" placeholder="ИНН вашей организации"
                               {...register('organizationInn', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\d+]{10,12}$/,
                                       message: "Некорректный ИНН"
                                   }
                               })}/>
                        {errors?.organizationInn &&
                            <p className="errorMessage">{errors?.organizationInn?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="legalAddress" className={"verticalLabel"}>
                            Юридический адрес
                        </label>
                        <input id="legalAddress"
                               className={"verticalInput"} type="text" placeholder="Юридический адрес"
                               {...register('legalAddress', {
                                   required: "Обязательное поле",
                                   minLength: {
                                       value: 5,
                                       message: "Минимум 5 символов"
                                   },
                                   pattern: {
                                       value: /.*[^-*]+.*/,
                                       message: "Некорректный адрес"
                                   }
                               })}/>
                        {errors?.legalAddress &&
                            <p className="errorMessage">{errors?.legalAddress?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="registrationCertificateNumber" className={"verticalLabel"}>
                            Номер свидетельства
                            <small className={"verticalSmall"}>(Не обязательно к заполнению. Формат: 13 арабских цифр)</small>
                        </label>
                        <input id="registrationCertificateNumber" className={"verticalInput"} type="text"
                               placeholder="Номер свидетельства о регистрации"
                               {...register('registrationCertificateNumber', {
                                   pattern: {
                                       value: /^[\d+]{13}$/,
                                       message: "Некорректный номер свидетельства"
                                   }
                               })}/>
                        {errors?.registrationCertificateNumber &&
                            <p className="errorMessage">{errors?.registrationCertificateNumber?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="registrationCertificateDate" className={"verticalLabel"}>
                            Дата выдачи свидетельства о регистрации
                            <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                        </label>
                        <input id="registrationCertificateDate"
                               className={"verticalInput"} type="date" placeholder="Дата выдачи свидетельства"
                               {...register('registrationCertificateDate')}/>
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="bankBik" className={"verticalLabel"}>
                            БИК
                            <small className={"verticalSmall"}>(Формат: 9 арабских цифр)</small>
                        </label>
                        <input id="bankBik" className={"verticalInput"}
                               type="text" placeholder="БИК вашего банка"
                               {...register('bankBik', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\d+]{9}$/,
                                       message: "Некорректный БИК"
                                   }
                               })}/>
                        {errors?.bankBik &&
                            <p className="errorMessage">{errors?.bankBik?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="organizationAccount" className={"verticalLabel"}>
                            Расчётный счет
                            <small className={"verticalSmall"}>(Формат: 20 арабских цифр)</small>
                        </label>
                        <input id="organizationAccount" className={"verticalInput"} type="text"
                               placeholder="Расчётный счет вашей организации"
                               {...register('organizationAccount', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^(?:[\. ]*\d){20}$/,
                                       message: "Некорректный рассчётный счёт"
                                   }
                               })}/>
                        {errors?.organizationAccount &&
                            <p className="errorMessage">{errors?.organizationAccount?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="directorFullName" className={"verticalLabel"}>
                            ФИО Директора
                        </label>
                        <input id="directorFullName"
                               className={"verticalInput"} type="text" placeholder="Иванов Иван Иванович"
                               {...register('directorFullName', {
                                   required: "Обязательное поле", minLength: {
                                       value: 1,
                                       message: "Минимум 1 символ"
                                   }
                               })}/>
                        {errors?.directorFullName &&
                            <p className="errorMessage">{errors?.directorFullName?.message || "Ошибка заполнения"}</p>}
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
                        <label htmlFor="comment" className={"verticalLabel"}>
                            Комментарий
                            <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                        </label>
                        <textarea id="comment" className={"verticalTextarea"}
                                  {...register('comment')}
                        ></textarea>
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="returnAddress" className={"verticalLabel"}>
                            Адрес пункта выдачи
                        </label>
                        <input id="returnAddress"
                               className={"verticalInput"} type="text"
                               placeholder="Адрес пункта выдачи для возвратов"
                               {...register('returnAddress', {
                                   required: "Обязательное поле",
                                   minLength: {
                                       value: 5,
                                       message: "Минимум 5 символов"
                                   },
                                   pattern: {
                                       value: /.*[^-*]+.*/,
                                       message: "Некорректный адрес"
                                   }
                               })}/>
                        {errors?.returnAddress &&
                            <p className="errorMessage">{errors?.returnAddress?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="city" className={"verticalLabel"}>
                            Город
                        </label>
                        <input id="city" className={"verticalInput"}
                               type="text" placeholder="Ваш город"
                               {...register('city', {
                                   required: "Обязательное поле"
                               })}/>
                        {errors?.city && <p className="errorMessage">{errors?.city?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label className={"verticalLabel"}>
                            Интернет-магазин
                        </label>
                        <div className={"inputsGroup"}>
                            <label htmlFor="isOnlineStoreTrue" className="custom-radio">
                                <input name="isOnlineStore" id="isOnlineStoreTrue" onChange={onNewIsWebStore}
                                       value="true"
                                       type="radio"
                                />
                                <span className="custom-radio-span"></span>
                                <span className="horizontalFormSpan">Да</span>
                            </label>
                            <label htmlFor="isOnlineStoreFalse" className="custom-radio">
                                <input name="isOnlineStore" id="isOnlineStoreFalse" onChange={onNewIsWebStore}
                                       value="false"
                                       type="radio"
                                />
                                <span className="custom-radio-span"></span>
                                <span className="horizontalFormSpan">Нет</span>
                            </label>
                        </div>
                    </div>
                    {isWebStore ? <div className={"visibleVerticalInput verticalInputBlock"}>
                        <label htmlFor="website" className={"verticalLabel"}>
                            Ссылка на интернет-магазин
                            <small className={"verticalSmall"}>(Например: https://example.com)</small>
                        </label>
                        <input name="website" id="website"
                               className={"verticalInput"} type="url" placeholder="Ссылка на ваш интернет-магазин"
                               {...register('website', {
                                   pattern: {
                                       value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                                       message: "Некорректный адрес"
                                   },
                               })}/>
                        {errors?.website &&
                            <p className="errorMessage">{errors?.website?.message || "Ошибка заполнения"}</p>}
                    </div> : null}
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

export default QuestionnairePage;