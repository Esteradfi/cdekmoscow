import {useDispatch, useSelector} from "react-redux";
import {updateComment, updateEmail, updateName, updatePhone} from "../../redux/contract-page-reducer";
import styles from "./ContractPage.module.css";


const ContractPage = (props) => {
    let dispatch = useDispatch();
    let name = useSelector(state => state.contractPage.name);
    let email = useSelector(state => state.contractPage.email);
    let phone = useSelector(state => state.contractPage.phone);
    let comment = useSelector(state => state.contractPage.comment);
    
    let onNewComment = (e) => {
        let newComment = e.target.value;
        dispatch(updateComment(newComment));
    }
    
    let onNewEmail = (e) => {
        let newEmail = e.target.value;
        dispatch(updateEmail(newEmail));
    }

    let onNewPhone = (e) => {
        let newPhone = e.target.value;
        dispatch(updatePhone(newPhone));
    }

    let onNewName = (e) => {
        let newName = e.target.value;
        dispatch(updateName(newName));
    }

    return (
        <section className={"section "}>
            <article className="container ">
                <form action="" method="" className={styles.contractForm}>
                    <input onChange={onNewName} value={name} required type="text" autoComplete="name" placeholder="Ваше имя"/>
                    <input onChange={onNewEmail} value={email} required type="email" placeholder="Ваш E-mail"/>
                    <input onChange={onNewPhone} value={phone} required type="tel" autoComplete="tel" placeholder="Ваш телефон для связи"/>
                    <textarea onChange={onNewComment} className={styles.contractTextarea} value={comment} name="" id="" cols="30" rows="10"></textarea>
                    <input className={styles.contractSubmit} type="submit"/>
                </form>
            </article>
        </section>
    )
}

export default ContractPage;