import styles from "./CalcPage.module.css";
import switchImage from "./../../assets/icons/switch-points.svg";

const CalcPage = (props) => {
    return (
        <section className={"section"}>
            <article className={"container "}>
                <h2 className={styles.articleTitle}>Калькулятор стоимости доставки</h2>
                <form className={styles.calcForm} action="" method="">
                    <div className={styles.calcHorizontalGroup}>
                        <label className={"verticalLabel " + styles.calcLabel} htmlFor="">
                            Откуда *
                            <input className={styles.calcLongInput} type="text" required placeholder="Город отправитель"/>
                            <span className={styles.calcHelp}>Москва, Санкт-Петербург, Новосибирск</span>
                        </label>
                        <div className={styles.calcSwitchBlock}>
                            <img src={switchImage} alt="Поменять местами"/>
                        </div>
                        <label className={"verticalLabel " + styles.calcLabel} htmlFor="">
                            Куда *
                            <input className={styles.calcLongInput} type="text" required placeholder="Город получатель"/>
                            <span className={styles.calcHelp}>Москва, Санкт-Петербург, Новосибирск</span>
                        </label>
                    </div>
                    <div>
                        <div className={"verticalLabel "}>Размер посылки *</div>
                        <div className={styles.calcHorizontalGroup + " " + styles.calcShortHorizontalGroup}>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="">
                                    Длина
                                    <input className={styles.calcShortInput} type="number" placeholder="см"/>
                                </label>
                            </div>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="">
                                    Ширина
                                    <input className={styles.calcShortInput} type="number" placeholder="см"/>
                                </label>
                            </div>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="">
                                    Высота
                                    <input className={styles.calcShortInput} type="number" placeholder="см"/>
                                </label>
                            </div>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="">
                                    Вес
                                    <input className={styles.calcShortInput} type="number" placeholder="кг"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <label className={"verticalLabel " + styles.calcLabel} htmlFor="">
                        Страховка отправления *
                        <input className={styles.calcLongInput + " " + styles.calcSingleInput} type="number" placeholder="Объявленная стоимость, руб"/>
                    </label>
                    <div className={styles.calcSubmitGroup}>
                        <input className={"verticalSubmit " + styles.calcSubmit} type="submit" value="Рассчитать стоимость"/>
                        <div>Не является офертой</div>
                    </div>
                    <div>* - обязательное поле</div>
                </form>
            </article>
        </section>
    )
}

export default CalcPage;