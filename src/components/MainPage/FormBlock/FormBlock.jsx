import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import styles from "./FormBlock.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeIsAgree, updateEmail, updateName, updatePhone} from "../../../redux/main-page-form-reducer";

const FormBlock = (props) => {
    let name = useSelector(state => state.mainPageForm.name);
    let email = useSelector(state => state.mainPageForm.email);
    let phone = useSelector(state => state.mainPageForm.phone);
    let isAgree = useSelector(state => state.mainPageForm.isAgree);
    let dispatch = useDispatch();

    const onNewName = (e) => {
        let newName = e.target.value;
        dispatch(updateName(newName));
    }

    const onNewEmail = (e) => {
        let newEmail = e.target.value;
        dispatch(updateEmail(newEmail));
    }

    const onNewPhone = (e) => {
        let newPhone = e.target.value;
        dispatch(updatePhone(newPhone));
    }

    const clickChangeIsAgree = () => {
        dispatch(changeIsAgree(isAgree));
    }

    return (
        <article className={styles.formBlock}>
            <div className={"container "}>
                <div className={styles.formTitle}>
                    <ArticleTitle title={"Нужно больше информации?"} />
                </div>
                <h3 className={styles.formSubtitle}>
                    Оставьте контакты, мы перезвоним вам и все расскажем.
                </h3>
                <form action="" method="">
                    <div className={styles.formRow}>
                        <input onChange={onNewName} value={name} className={styles.formInput} required type="text" autoComplete="name" placeholder="Имя"/>
                        <input onChange={onNewEmail} value={email} className={styles.formInput} required type="email" placeholder="E-mail"/>
                        <input onChange={onNewPhone} value={phone} className={styles.formInput} required type="tel" autoComplete="tel" placeholder="Телефон"/>
                        <input className={styles.formSubmit} type="submit"/>
                    </div>
                    <div className={styles.formRow}>
                        <label htmlFor="isAgree" className="custom-checkboxes" onClick={clickChangeIsAgree}>
                            <input name="isAgree" id="isAgree" type="checkbox" required />
                            <span className="custom-checkboxes-span"></span>
                            <span className="horizontalFormSpan">Согласие на обработку персональных данных</span>
                        </label>
                    </div>
                </form>
                <div className={styles.formBLockText}>
                    Отправляя сообщение, я даю согласие на обработку своих персональных данных в соответствии с <a className={styles.formBlockLink} href="https://www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%9F%D0%94%D0%BD_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_01_09_22.pdf">политикой конфиденциальности</a>.
                </div>
            </div>
        </article>
    )
}

export default FormBlock;