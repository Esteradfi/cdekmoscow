import styles from "./TariffsItem.module.css";

const TariffsItem = (props) => {
    let state = props.el;
    let secondLocationTotalcolumn = props.secondLocationTotalcolumn;
    return (
        <tr className={state.tariff_name.toLowerCase().includes("посылка склад-склад") ? styles.bold : ""}>
            <td>
                <div>{state.tariff_name}</div>
                {state.tariff_name.toLowerCase().includes("посылка") ?
                    <div className={styles.bold}>(только для ИП, ООО и самозанятых)</div> : null}
            </td>
            <td>{secondLocationTotalcolumn ? state.total_delivery_cost + " " : state.delivery_sum + " "}руб.</td>
            <td>{secondLocationTotalcolumn ? state.delivery_sum + " " : props.insuranceCost + " "}руб.</td>
            <td>{secondLocationTotalcolumn ? <span>{props.insuranceCost + " "}руб.</span> : <span> от {" " + state.period_min + " "} до {" " + state.period_max + " "} раб. дней</span>}</td>
            <td>{secondLocationTotalcolumn ? <span>от {" " + state.period_min + " "} до {" " + state.period_max + " "} раб. дней</span> : state.total_delivery_cost + " "} руб.</td>
        </tr>
    )
}

export default TariffsItem;