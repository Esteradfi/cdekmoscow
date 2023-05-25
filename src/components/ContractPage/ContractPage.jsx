import {useDispatch, useSelector} from "react-redux";
import {updateComment, updateEmail, updateName, updatePhone} from "../../redux/contract-page-reducer";
import styles from "./ContractPage.module.css";


const ContractPage = (props) => {
    let dispatch = useDispatch();
    let name = useSelector(state => state.contractPage.name);
    let email = useSelector(state => state.contractPage.email);
    let phone = useSelector(state => state.contractPage.phone);
    let comment = useSelector(state => state.contractPage.comment);
    
    const onNewComment = (e) => {
        let newComment = e.target.value;
        dispatch(updateComment(newComment));
    }
    
    const onNewEmail = (e) => {
        let newEmail = e.target.value;
        dispatch(updateEmail(newEmail));
    }

    const onNewPhone = (e) => {
        let newPhone = e.target.value;
        dispatch(updatePhone(newPhone));
    }

    const onNewName = (e) => {
        let newName = e.target.value;
        dispatch(updateName(newName));
    }

    return (
        <section className={"section "}>
            <article className="container ">
                <form action="" method="" name="contract-form" id="contract-form" className={"verticalForm"}>
                    <label htmlFor="name" className={"verticalLabel"}>
                        ФИО
                    </label>
                    <input name="name" id="name" onChange={onNewName} value={name} className={"verticalInput"} required type="text" autoComplete="name" placeholder="Ваше имя"/>
                    <label htmlFor="email" className={"verticalLabel"}>
                        E-mail
                    </label>
                    <input name="email" id="email" onChange={onNewEmail} value={email} className={"verticalInput"} required type="email" placeholder="Ваш E-mail"/>
                    <label htmlFor="phone" className={"verticalLabel"}>
                        Телефон
                    </label>
                    <input name="phone" id="phone" onChange={onNewPhone} value={phone} className={"verticalInput"} required type="tel" autoComplete="tel" placeholder="Ваш телефон для связи"/>
                    <label htmlFor="comment" className={"verticalLabel"}>
                        Комментарий
                        <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                    </label>
                    <textarea name="comment" id="comment" onChange={onNewComment} className={"verticalTextarea"} value={comment}></textarea>
                    <input className={"verticalSubmit"} type="submit"/>
                </form>
                <p className={styles.contractParagraph}>
                    «Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a target="_blanc" href="//www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%9F%D0%94%D0%BD_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_01_09_22.pdf">политикой конфиденциальности</a>»
                </p>
            </article>
        </section>
    )
}

export default ContractPage;