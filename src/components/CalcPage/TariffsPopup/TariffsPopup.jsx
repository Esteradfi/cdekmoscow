import styles from "./TariffsPopup.module.css";
import TariffsItem from "./TariffsItem/TariffsItem";
import RequestCall from "./RequestCall/RequestCall";

const TariffsPopup = (props) => {
    let state = props.state;

    let tariffItems = state.tariffsList.map(el => <TariffsItem key={el.tariff_code} el={el}
                                                               insuranceCost={state.insuranceCost}/>)

    return (
        <div className={"container " + styles.tariffsPopup}>
            <header className={styles.tariffsPopupHeader}>
                <button onClick={props.onTariffsClose} className={styles.tariffsButton}>Закрыть</button>
                <button onClick={props.onRequestCall}
                        className={styles.tariffsButton}>{state.isRequestCallWindow ? "Вернуться к тарифам" : "Заказать звонок"}</button>
            </header>
            {state.isRequestCallWindow ? <RequestCall state={state} onRequestCall={props.onRequestCall}/> :
                <div>
                    <div className={styles.tariffsPopupInfo}>
                        <div className={styles.greenText}>
                            <h3>С договором</h3>
                            <ul>
                                <li>Пониженная цена доставки</li>
                                <li>Сопровождение доставки</li>
                                <li>Интеграция рассчётного модуля на сайт вашего магазина</li>
                            </ul>
                        </div>
                        <div className={styles.dimText}>
                            <h3>Без договора</h3>
                            <ul>
                                <li>Полная цена доставки</li>
                                <li>Без сопровождения доставки</li>
                                <li>Без интеграции рассчётного модуля на сайт вашего магазина</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.tariffsTable}>
                            <thead>
                            <tr>
                                <th>Тариф</th>
                                <th>Страховка отправления</th>
                                <th>Срок доставки</th>
                                <th>Итого</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tariffItems}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default TariffsPopup;