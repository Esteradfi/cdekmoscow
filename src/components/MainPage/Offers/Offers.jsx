import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import styles from "./Offers.module.css";
import {useSelector} from "react-redux";
import OfferItem from "./OfferItem/OfferItem";

const Offers = (props) => {
    let offerState = useSelector(state => state.offers);
    let offerItems = offerState.items.map(el => <OfferItem key={el.id} el={el} />)

    return (
        <article className={"container"}>
            <ArticleTitle title={"Готовые решения для вашего бизнеса"} />
            <div className={styles.offerItems}>
                {offerItems}
            </div>
        </article>
    )
}

export default Offers;