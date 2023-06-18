import {useDispatch} from "react-redux";
import styles from "./ContractPage.module.css";
import {useForm} from "react-hook-form";


const ContractPage = (props) => {
    // let dispatch = useDispatch();

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

    return (
        <section className={"section "}>
            <article className="container ">
                <form onSubmit={handleSubmit(onSubmit)} className={"verticalForm"}>
                    <div className="verticalInputBlock">
                        <label htmlFor="name" className={"verticalLabel"}>
                            ФИО
                        </label>
                        <input id="name" className={"verticalInput"} type="text" autoComplete="name" placeholder="Ваше имя"
                               {...register('name', {
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
                        </label>
                        <input id="email" className={"verticalInput"} type="email" placeholder="Ваш E-mail"
                               {...register('email', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                       message: "Некорректная почта"
                                   }
                               })}/>
                        {errors?.email && <p className="errorMessage">{errors?.email?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="phone" className={"verticalLabel"}>
                            Телефон
                        </label>
                        <input id="phone" className={"verticalInput"} type="tel" autoComplete="tel" placeholder="Ваш телефон для связи"
                               {...register('phone', {
                                   required: "Обязательное поле",
                                   pattern: {
                                       value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                       message: "Некорректный номер телефона"
                                   }
                               })}/>
                        {errors?.phone && <p className="errorMessage">{errors?.phone?.message || "Ошибка заполнения"}</p>}
                    </div>
                    <div className="verticalInputBlock">
                        <label htmlFor="comment" className={"verticalLabel"}>
                            Комментарий
                            <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                        </label>
                        <textarea id="comment" className={"verticalTextarea"}
                                  {...register('comment')}></textarea>
                    </div>
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
                <p className={styles.contractParagraph}>
                    «Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a target="_blanc" href="//www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%9F%D0%94%D0%BD_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_01_09_22.pdf">политикой конфиденциальности</a>»
                </p>
            </article>
        </section>
    )
}

export default ContractPage;