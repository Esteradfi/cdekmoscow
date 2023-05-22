import styles from "./AboutItem.module.css";
import a1 from "./../../../../assets/about/a1.png";
import a2 from "./../../../../assets/about/a2.png";
import a3 from "./../../../../assets/about/a3.png";
import a4 from "./../../../../assets/about/a4.png";
import a5 from "./../../../../assets/about/a5.png";
import a6 from "./../../../../assets/about/a6.png";
import a7 from "./../../../../assets/about/a7.png";
import a8 from "./../../../../assets/about/a8.png";
import a9 from "./../../../../assets/about/a9.png";
import a10 from "./../../../../assets/about/a10.png";
const AboutItem = (props) => {
    let state = props.el;

    const getImage = (id) => {
        switch (id) {
            case "a1":
                return a1;
            case "a2":
                return a2;
            case "a3":
                return a3;
            case "a4":
                return a4;
            case "a5":
                return a5;
            case "a6":
                return a6;
            case "a7":
                return a7;
            case "a8":
                return a8;
            case "a9":
                return a9;
            case "a10":
                return a10;
            default:
                return "";
        }
    }

    let itemImage = getImage(state.id);

    return (
        <div className={styles.aboutItem}>
            <img className={styles.aboutItemImage} src={itemImage} alt={state.name}/>
            <div className={styles.aboutItemContent}>
                <h4 className={styles.aboutItemTitle}>{state.name}</h4>
                <div className={styles.aboutItemText}>{state.description}</div>
            </div>
        </div>
    )
}

export default AboutItem;