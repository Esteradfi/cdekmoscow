import styles from "./Integration.module.css";
import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import image from "./../../../assets/integration.png";
import {NavLink} from "react-router-dom";
const Integration = (props) => {
    return (
        <article className={"container"}>
            <ArticleTitle title={"Интеграция"} />
            <div className={styles.integrationWrapper}>
                <div className={styles.integrationContent}>
                    <div>
                        <p className={styles.integrationText}>Автоматизация бизнес-процессов с помощью интеграции позволит упростить работу, сэкономить средства и время, а также обрабатывать большее количество заказов.</p>
                        <p className={styles.integrationText}>Интеграция (установка связи) происходит с обеих сторон. CDEK предоставляет бесплатную и открытую реализацию обмена данными (API). Интернет-магазин выбирает программное решение и настраивает взаимодействие со CDEK на своей стороне.</p>
                    </div>
                    <NavLink className={styles.integrationButton} to="/contract">
                        Узнать подробнее
                    </NavLink>
                </div>
                <img className={styles.integrationImage} src={image} alt="Интеграция"/>
            </div>
        </article>
    )
}

export default Integration;