import {useDispatch, useSelector} from "react-redux";
import {
    updateIsWebStore,
} from "../../redux/questionnaire-page-reducer";
import styles from "./QuestionnairePage.module.css";
import {useForm} from "react-hook-form";


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
        alert(JSON.stringify(data));
        reset();
    }

    const onNewIsWebStore = (e) => {
        let newIsWebStore = e.target.value;
        dispatch(updateIsWebStore(newIsWebStore));
    }

    return (
        <section className={"section "}>
            <article className="container ">
                <form onSubmit={handleSubmit(onSubmit)} className={"verticalForm"}>
                    <div className="verticalInputBlock">
                        <label htmlFor="name" className={"verticalLabel"}>
                            Контактное лицо
                        </label>
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
                        <label htmlFor="phone" className={"verticalLabel"}>
                            Телефон
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
                        <label htmlFor="inn" className={"verticalLabel"}>
                            ИНН
                        </label>
                        <input id="inn" className={"verticalInput"}
                               type="text" placeholder="ИНН вашей организации"
                               {...register('inn', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\d+]{10,12}$/,
                                       message: "Некорректный ИНН"
                                   }
                               })}/>
                        {errors?.inn && <p className="errorMessage">{errors?.inn?.message || "Ошибка заполнения"}</p>}
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
                        <label htmlFor="certificateNumber" className={"verticalLabel"}>
                            Номер свидетельства
                            <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                        </label>
                        <input id="certificateNumber" className={"verticalInput"} type="text"
                               placeholder="Номер свидетельства о регистрации"
                               {...register('certificateNumber')}/>
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="certificateIssueDate" className={"verticalLabel"}>
                            Дата выдачи свидетельства о регистрации
                            <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                        </label>
                        <input id="certificateIssueDate"
                               className={"verticalInput"} type="date" placeholder="Дата выдачи свидетельства"
                               {...register('certificateIssueDate')}/>
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="bik" className={"verticalLabel"}>
                            БИК
                        </label>
                        <input id="bik" className={"verticalInput"}
                               type="text" placeholder="БИК вашего банка"
                               {...register('bik', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\d+]{9}$/,
                                       message: "Некорректный БИК"
                                   }
                               })}/>
                        {errors?.bik && <p className="errorMessage">{errors?.bik?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="checkingAccount" className={"verticalLabel"}>
                            Расчётный счет
                        </label>
                        <input id="checkingAccount" className={"verticalInput"} type="text"
                               placeholder="Расчётный счет вашей организации"
                               {...register('checkingAccount', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^\d{3}-\d{2}-\d{3}-\d{1}-\d{4}-\d{6}$/,
                                       message: "Некорректный рассчётный счёт. Формат: ААА-ББ-ВВВ-Г-ДДДД-ЕЕЕЕЕЕЕ"
                                   }
                               })}/>
                        {errors?.checkingAccount &&
                            <p className="errorMessage">{errors?.checkingAccount?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="directorName" className={"verticalLabel"}>
                            ФИО Директора
                        </label>
                        <input id="directorName"
                               className={"verticalInput"} type="text" placeholder="Иванов Иван Иванович"
                               {...register('directorName', {
                                   required: "Обязательное поле", minLength: {
                                       value: 1,
                                       message: "Минимум 1 символ"
                                   }
                               })}/>
                        {errors?.directorName &&
                            <p className="errorMessage">{errors?.directorName?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="email" className={"verticalLabel"}>
                            E-mail
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
                        <label htmlFor="pointAddress" className={"verticalLabel"}>
                            Адрес пункта выдачи
                        </label>
                        <input id="pointAddress"
                               className={"verticalInput"} type="text"
                               placeholder="Адрес пункта выдачи для возвратов"
                               {...register('pointAddress', {
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
                        {errors?.pointAddress &&
                            <p className="errorMessage">{errors?.pointAddress?.message || "Ошибка заполнения"}</p>}
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
                        <label htmlFor="isWebStore" className={"verticalLabel"}>
                            Интернет-магазин
                        </label>
                        <div className={"inputsGroup"}>
                            <label htmlFor="isWebStoreTrue" className="custom-radio">
                                <input name="isWebStore" id="isWebStoreTrue" onChange={onNewIsWebStore} value="Yes"
                                       type="radio"
                                />
                                <span className="custom-radio-span"></span>
                                <span className="horizontalFormSpan">Да</span>
                            </label>
                            <label htmlFor="isWebStoreFalse" className="custom-radio">
                                <input name="isWebStore" id="isWebStoreFalse" onChange={onNewIsWebStore} value="No"
                                       type="radio"
                                />
                                <span className="custom-radio-span"></span>
                                <span className="horizontalFormSpan">Нет</span>
                            </label>
                        </div>
                    </div>
                    {isWebStore ? <div className={"visibleVerticalInput verticalInputBlock"}>
                        <label htmlFor="webStore" className={"verticalLabel"}>
                            Ссылка на интернет-магазин
                            <small className={"verticalSmall"}>(Например: https://example.com)</small>
                        </label>
                        <input name="webStore" id="webStore"
                               className={"verticalInput"} type="url" placeholder="Ссылка на ваш интернет-магазин"
                               {...register('webStore', {
                                   pattern: {
                                       value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                                       message: "Некорректный адрес"
                                   },
                               })}/>
                        {errors?.webStore &&
                            <p className="errorMessage">{errors?.webStore?.message || "Ошибка заполнения"}</p>}
                    </div> : null}
                    <div className={styles.checkboxBlock}>
                        <label htmlFor="agreement" className="custom-checkboxes">
                            <input type="checkbox" id="agreement"
                                   {...register('agreement', {
                                       required: "Обязательное поле",
                                   })}/>
                            <span className="custom-checkboxes-span"></span>
                            <span className="horizontalFormSpan">Согласие на обработку персональных данных</span>
                        </label>
                    </div>
                    <input className={"verticalSubmit"} type="submit" disabled={!isValid}/>
                </form>
            </article>
        </section>
    )
}

export default QuestionnairePage;