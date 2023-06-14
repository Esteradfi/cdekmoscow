import styles from "./TariffsItem.module.css";
const TariffsItem = (props) => {
    let state = props.el;
    return (
        <tr>
            <td>{state.tariff_name}</td>
            <td>{props.insuranceCost + " "}руб.</td>
            <td>от {" " + state.period_min + " "} до {" " + state.period_max + " "} раб. дней</td>
            <td>{state.total_delivery_cost + " "} руб.</td>
        </tr>
    )
}

export default TariffsItem;