import styles from "./CalcPage.module.css";
import switchImage from "./../../assets/icons/switch-points.svg";
import Fuse from "fuse.js";
import {useDispatch, useSelector} from "react-redux";
import {
    updateFromLocationName,
    updateToLocationName,
    updateLength,
    updateWidth,
    updateHeight,
    updateWeight,
    updateInsurance,
    getCitiesThunk,
    calcDeliveryCostThunk,
    updateFromLocation,
    updateToLocation,
    updateSearchResultsFromLocation, updateSearchResultsToLocation, changeIsFetching
} from "../../redux/calc-reducer";
import {createRef, useEffect} from "react";
import FromLocationItem from "./FromLocationItem/FromLocationItem";
import ToLocationItem from "./ToLocationItem/ToLocationItem";
import Preloader from "../common/Preloader/Preloader";
import TariffsPopup from "./TariffsPopup/TariffsPopup";

const CalcPage = (props) => {
    let calcState = useSelector(state => state.calc);
    let dispatch = useDispatch();
    let cities = calcState.cities;

    const changeIsFetchingState = (change) => {
        dispatch(changeIsFetching(change));
    }

    useEffect(() => {
        dispatch(getCitiesThunk());
    }, [dispatch]);

    let fuse = new Fuse(cities, {
        keys: ['country', 'region', 'city'],
        threshold: 0.3,
    });

    let fromLocationItems = calcState.searchResultsFromLocation.map(el => <FromLocationItem key={el.code} el={el}
                                                                                            calcState={calcState}
                                                                                            dispatch={dispatch}/>)
    let toLocationItems = calcState.searchResultsToLocation.map(el => <ToLocationItem key={el.code} el={el}
                                                                                      calcState={calcState}
                                                                                      dispatch={dispatch}/>)

    const searchCities = (query) => {
        // Perform fuzzy search using Fuse.js
        const results = fuse.search(query);
        return results.map(result => result.item);
    }

    const onNewFromLocationName = (e) => {
        let newFromLocationName = e.target.value;
        let results = searchCities(newFromLocationName);
        dispatch(updateSearchResultsFromLocation(results.length < 10 ? results : results.splice(0, 10)));
        dispatch(updateFromLocationName(newFromLocationName));
    }
    const onNewToLocationName = (e) => {
        let newToLocationName = e.target.value;
        let results = searchCities(newToLocationName);
        dispatch(updateSearchResultsToLocation(results.length < 10 ? results : results.splice(0, 10)));
        dispatch(updateToLocationName(newToLocationName));
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
    //Переворот значений полей Откуда и Куда
    const switchLocations = () => {
        let newToLocationName = calcState.fromLocationName;
        let newFromLocationName = calcState.toLocationName;
        let newToLocation = calcState.fromLocation;
        let newFromLocation = calcState.toLocation;
        dispatch(updateFromLocation(newFromLocation));
        dispatch(updateToLocation(newToLocation));
        dispatch(updateFromLocationName(newFromLocationName));
        dispatch(updateToLocationName(newToLocationName));
    }

    //Сброс результатов поиска
    const resetResults = () => {
        dispatch(updateSearchResultsFromLocation([]));
        dispatch(updateSearchResultsToLocation([]));
    }

    //Запрос на рассчёт доставки
    const clickCalcDeliveryCost = () => {
        let date = +new Date();
        let data = {
            type: 1,
            date: date,
            currency: 1,
            lang: "rus",
            from_location: {
                code: calcState.fromLocation
            },
            to_location: {
                code: calcState.toLocation
            },
            packages: [
                {
                    height: calcState.height,
                    length: calcState.length,
                    weight: calcState.weight,
                    width: calcState.width
                }
            ],
            insurance: calcState.insurance ? calcState.insurance : 1
        }
        dispatch(calcDeliveryCostThunk(data));
        changeIsFetchingState(true);
    }

    return (
        <section className={"section"} onClick={resetResults}>
            <div className={calcState.isFetching || calcState.tariffsIsOpen ? styles.calcOverlay : null}></div>
            {calcState.isFetching && <Preloader/>}
            {calcState.tariffsIsOpen && <TariffsPopup state={calcState} dispatch={dispatch} />}
            <article className={"container "}>
                <h1 className={styles.articleTitle}>Калькулятор стоимости доставки</h1>
                <form className={styles.calcForm} action="" method="">
                    <div className={styles.calcHorizontalGroup}>
                        <div className={"verticalLabel " + styles.calcLabel}>
                            Откуда *
                            <input className={styles.calcLongInput} onChange={onNewFromLocationName}
                                   value={calcState.fromLocationName} type="text" required
                                   autoComplete="off"
                                   placeholder="Город отправитель"/>
                            <div className={styles.searchResultsWrapper}>
                                <div className={styles.searchResults}>{fromLocationItems}</div>
                            </div>
                            <span className={styles.calcHelp}>Начните вводить и выберете из списка</span>
                        </div>
                        <div className={styles.calcSwitchBlock}>
                            <img src={switchImage} onClick={switchLocations} alt="Поменять местами"/>
                        </div>
                        <div className={"verticalLabel " + styles.calcLabel}>
                            Куда *
                            <input className={styles.calcLongInput} onChange={onNewToLocationName}
                                   autoComplete="off"
                                   value={calcState.toLocationName} type="text" required
                                   placeholder="Город получатель"/>
                            <div className={styles.searchResultsWrapper}>
                                <div className={styles.searchResults}>{toLocationItems}</div>
                            </div>
                            <span className={styles.calcHelp}>Начните вводить и выберете из списка</span>
                        </div>
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
                               onClick={clickCalcDeliveryCost}
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