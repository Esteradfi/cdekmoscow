import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import styles from "./Stages.module.css";
import {NavLink} from "react-router-dom";

const Stages = (props) => {
    return (
        <article className={"container "}>
            <ArticleTitle title={"Как заключить договор со CDEK?"} />
            <div className={styles.stagesWrapper}>
                <div className={styles.stagesItem}>
                    <div className={styles.stagesNumber}>
                        01
                    </div>
                    <div className={styles.stagesText}>
                        Заполните анкету
                    </div>
                </div>
                <div className={styles.stagesItem}>
                    <div className={styles.stagesNumber}>
                        02
                    </div>
                    <div className={styles.stagesText}>
                        Дождитесь звонка от менеджера и согласуйте условия сотрудничества
                    </div>
                </div>
                <div className={styles.stagesItem}>
                    <div className={styles.stagesNumber}>
                        03
                    </div>
                    <div className={styles.stagesText}>
                        Подпишите договор
                    </div>
                </div>
            </div>
            <NavLink className={styles.stagesLink} to="/contract">
                Заполнить анкету
            </NavLink>
        </article>
    )
}

export default Stages;