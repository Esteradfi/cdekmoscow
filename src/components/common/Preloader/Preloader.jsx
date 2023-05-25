import styles from "./Preloader.module.css";
import preloader from "./../../../assets/icons/preloader.svg"

const Preloader = (props) => {
    return (
        <div className={styles.preloaderBlock}>
            <img src={preloader} alt="Загрузка"/>
        </div>
    )
}

export default Preloader;