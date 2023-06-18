import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import styles from "./FormBlock.module.css";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";

const FormBlock = (props) => {
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
        <article className={styles.formBlock}>
            <div className={"container "}>
                <div className={styles.formTitle}>
                    <ArticleTitle title={"Нужно больше информации?"}/>
                </div>
                <h3 className={styles.formSubtitle}>
                    Оставьте контакты, мы перезвоним вам и все расскажем.
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formRow}>
                        <label htmlFor="name" className={styles.formLabel}>
                            <input type="text"
                                   autoComplete="name" placeholder="Имя"
                                   {...register('name', {
                                       required: "Обязательное поле", minLength: {
                                           value: 1,
                                           message: "Минимум 1 символ"
                                       }
                                   })}/>
                            {errors?.name && <p className="errorMessage">{errors?.name?.message || "Ошибка заполнения"}</p>}
                        </label>
                        <label htmlFor="email" className={styles.formLabel}>
                            <input type="email"
                                   placeholder="E-mail"
                                   {...register('email', {
                                       required: "Обязательное поле",
                                       pattern: {
                                           value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                           message: "Некорректная почта"
                                       }
                                   })}/>
                            {errors?.email && <p className="errorMessage">{errors?.email?.message || "Ошибка заполнения"}</p>}
                        </label>
                        <label htmlFor="phone" className={styles.formLabel}>
                            <input type="tel"
                                   autoComplete="tel" placeholder="Телефон"
                                   {...register('phone', {
                                       required: "Обязательное поле",
                                       pattern: {
                                           value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                                           message: "Некорректный номер телефона"
                                       }
                                   })}/>
                            {errors?.phone && <p className="errorMessage">{errors?.phone?.message || "Ошибка заполнения"}</p>}
                        </label>
                        <label htmlFor="" className={styles.formLabel}>
                            <input className={styles.formSubmit} type="submit" disabled={!isValid}/>
                        </label>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="agreement" className="custom-checkboxes">
                            <input type="checkbox" id="agreement"
                                   {...register('agreement', {
                                       required: "Обязательное поле",
                                   })}/>
                            <span className="custom-checkboxes-span"></span>
                            <span className="horizontalFormSpan">Согласие на обработку персональных данных</span>
                        </label>
                    </div>
                </form>
                <div className={styles.formBLockText}>
                    Отправляя сообщение, я даю согласие на обработку своих персональных данных в соответствии с <a
                    className={styles.formBlockLink}
                    href="https://www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%9F%D0%94%D0%BD_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_01_09_22.pdf">политикой
                    конфиденциальности</a>.
                </div>
            </div>
        </article>
    )
}

export default FormBlock;