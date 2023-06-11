import styles from "./TariffsPopup.module.css";
import TariffsItem from "./TariffsItem/TariffsItem";
import {changeTariffsIsOpen} from "../../../redux/calc-reducer";
const TariffsPopup = (props) => {
    let state = props.state;

    let tariffItems = state.tariffsList.map(el => <TariffsItem key={el.tariff_code} el={el} insuranceCost={state.insuranceCost} />)

    const onTariffsClose = () => {
        props.dispatch(changeTariffsIsOpen(false));
    }

    return (
        <div className={"container " + styles.tariffsPopup}>
            <button onClick={onTariffsClose} className={styles.tariffsClose}>Закрыть</button>
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
    )
}

export default TariffsPopup;