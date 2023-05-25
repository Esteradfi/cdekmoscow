import styles from "./CalcPage.module.css";
import switchImage from "./../../assets/icons/switch-points.svg";
import {useDispatch, useSelector} from "react-redux";
import {
    updateFromLocation, updateToLocation, updateLength,
    updateWidth,
    updateHeight,
    updateWeight,
    updateInsurance
} from "../../redux/calc-reducer";

const CalcPage = (props) => {
    let calcState = useSelector(state => state.calc);
    let dispatch = useDispatch();

    const onNewFromLocation = (e) => {
        let newFromLocation = e.target.value;
        dispatch(updateFromLocation(newFromLocation));
    }

    const onNewToLocation = (e) => {
        let newToLocation = e.target.value;
        dispatch(updateToLocation(newToLocation));
    }

    const onNewLength = (e) => {
        let newLength = e.target.value < 0 ? 0 : e.target.value;
        dispatch(updateLength(newLength));
    }

    const onNewWidth = (e) => {
        let newWidth = e.target.value < 0 ? 0 : e.target.value;
        dispatch(updateWidth(newWidth));
    }

    const onNewHeight = (e) => {
        let newHeight = e.target.value < 0 ? 0 : e.target.value;
        dispatch(updateHeight(newHeight));
    }

    const onNewWeight = (e) => {
        let newWeight = e.target.value < 0 ? 0 : e.target.value;
        dispatch(updateWeight(newWeight));
    }

    const onNewInsurance = (e) => {
        let newInsurance = e.target.value < 0 ? 0 : e.target.value;
        dispatch(updateInsurance(newInsurance));
    }

    const switchLocations = () => {
        let newToLocation = calcState.fromLocation;
        let newFromLocation = calcState.toLocation;
        dispatch(updateFromLocation(newFromLocation));
        dispatch(updateToLocation(newToLocation));
    }


    return (
        <section className={"section"}>
            <div className={calcState.isFetching ? styles.calcOverlay : ""}></div>
            <article className={"container "}>
                <h1 className={styles.articleTitle}>Калькулятор стоимости доставки</h1>
                <form className={styles.calcForm} action="" method="">
                    <div className={styles.calcHorizontalGroup}>
                        <label className={"verticalLabel " + styles.calcLabel} htmlFor="fromLocation">
                            Откуда *
                            <input className={styles.calcLongInput} onChange={onNewFromLocation}
                                   name="fromLocation" id="fromLocation"
                                   value={calcState.fromLocation} type="text" required
                                   placeholder="Город отправитель"/>
                            <span className={styles.calcHelp}>Москва, Санкт-Петербург, Новосибирск</span>
                        </label>
                        <div className={styles.calcSwitchBlock}>
                            <img src={switchImage} onClick={switchLocations} alt="Поменять местами"/>
                        </div>
                        <label className={"verticalLabel " + styles.calcLabel} htmlFor="toLocation">
                            Куда *
                            <input className={styles.calcLongInput} onChange={onNewToLocation}
                                   name="toLocation" id="toLocation"
                                   value={calcState.toLocation} type="text" required
                                   placeholder="Город получатель"/>
                            <span className={styles.calcHelp}>Москва, Санкт-Петербург, Новосибирск</span>
                        </label>
                    </div>
                    <div>
                        <div className={"verticalLabel "}>Размер посылки *</div>
                        <div className={styles.calcHorizontalGroup + " " + styles.calcShortHorizontalGroup}>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="length">
                                    Длина
                                    <input className={styles.calcShortInput} onChange={onNewLength}
                                           name="length" id="length"
                                           value={calcState.length} required
                                           type="number" placeholder="см"/>
                                </label>
                            </div>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="width">
                                    Ширина
                                    <input className={styles.calcShortInput} onChange={onNewWidth}
                                           name="width" id="width"
                                           value={calcState.width} required
                                           type="number" placeholder="см"/>
                                </label>
                            </div>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="height">
                                    Высота
                                    <input className={styles.calcShortInput} onChange={onNewHeight}
                                           name="height" id="height"
                                           value={calcState.height} required
                                           type="number" placeholder="см"/>
                                </label>
                            </div>
                            <div className={styles.calcShortBlock}>
                                <label className={styles.calcShortLabel} htmlFor="weight">
                                    Вес
                                    <input className={styles.calcShortInput} onChange={onNewWeight}
                                           name="weight" id="weight"
                                           value={calcState.weight} required
                                           type="number" placeholder="кг"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <label className={"verticalLabel " + styles.calcLabel} htmlFor="insurance">
                        Страховка отправления *
                        <input className={styles.calcLongInput + " " + styles.calcSingleInput} onChange={onNewInsurance}
                               name="insurance" id="insurance"
                               value={calcState.insurance} required type="number"
                               placeholder="Объявленная стоимость, руб"/>
                    </label>
                    <div className={styles.calcSubmitGroup}>
                        <input className={"verticalSubmit " + styles.calcSubmit} type="button"
                               value="Рассчитать стоимость"/>
                        <div>Не является офертой</div>
                    </div>
                    <div>* — обязательное поле</div>
                </form>
            </article>
        </section>
    )
}

export default CalcPage;