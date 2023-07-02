import styles from "./TariffsPopup.module.css";
import TariffsItem from "./TariffsItem/TariffsItem";
import RequestCall from "./RequestCall/RequestCall";

const TariffsPopup = (props) => {
    let state = props.state;

    let windowInnerWidth = window.innerWidth;
    let secondLocationTotalcolumn = windowInnerWidth < 816;

    let tariffItems = state.tariffsList.map(el => <TariffsItem key={el.tariff_code} el={el}
                                                               secondLocationTotalcolumn={secondLocationTotalcolumn}
                                                               insuranceCost={state.insuranceCost}/>);


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
                                <li>Скидка до 50% на доставку (спец. тарифы)</li>
                                <li>Личный кабинет (исчерпывающая информация по отправкам)</li>
                                <li>Личный менеджер</li>
                                <li>Страхование грузов (0,7% от объявленной стоимости)</li>
                                <li>Наложенный платёж (возможность отправки с оплатой за товар при получении)</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.tableWrapper}>
                        <table className={styles.tariffsTable}>
                            <thead>
                            {secondLocationTotalcolumn ? <tr>
                                        <th>Тариф</th>
                                        <th>Итого</th>
                                        <th>Стоимость доставки</th>
                                        <th>Стоимость страховки</th>
                                        <th>Срок доставки</th>
                            </tr> : <tr>
                                        <th>Тариф</th>
                                        <th>Стоимость доставки</th>
                                        <th>Стоимость страховки</th>
                                        <th>Срок доставки</th>
                                        <th>Итого</th>
                                    </tr>}
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