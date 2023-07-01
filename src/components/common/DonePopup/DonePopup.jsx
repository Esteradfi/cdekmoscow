import styles from "./DonePopup.module.css";
import doneImage from "./../../../assets/icons/done.svg";

const DonePopup = (props) => {
    return (
        <div className={styles.doneBlock}>
            <img src={doneImage} alt="Успешно"/>
            <p>Данные успешно отправлены! Скоро мы свяжемся с вами.</p>
        </div>
    )
}

export default DonePopup;