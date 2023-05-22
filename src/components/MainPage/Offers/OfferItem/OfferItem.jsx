import styles from "./OfferItem.module.css";
import o1 from "./../../../../assets/offers/o1.png";
import o2 from "./../../../../assets/offers/o2.png";
import o3 from "./../../../../assets/offers/o3.png";
import o4 from "./../../../../assets/offers/o4.png";
import o5 from "./../../../../assets/offers/o5.png";
import o6 from "./../../../../assets/offers/o6.png";
import o7 from "./../../../../assets/offers/o7.png";
import o8 from "./../../../../assets/offers/o8.svg";

const OfferItem = (props) => {
    let state = props.el;

    const getImage = (id) => {
        switch (id) {
            case "o1":
                return o1;
            case "o2":
                return o2;
            case "o3":
                return o3;
            case "o4":
                return o4;
            case "o5":
                return o5;
            case "o6":
                return o6;
            case "o7":
                return o7;
            case "o8":
                return o8;
            default:
                return "";
        }
    }

    let itemImage = getImage(state.id);

    return (
        <div className={styles.offerItem}>
            <img className={styles.offerItemImage} src={itemImage} alt={state.name}/>
            <h4 className={styles.offerItemTitle}>{state.name}</h4>
            <div className={styles.offerItemText}>{state.description}</div>
        </div>
    )
}

export default OfferItem;