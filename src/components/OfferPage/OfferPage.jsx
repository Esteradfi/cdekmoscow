import arrow from "./../../assets/icons/arrow-right.svg";
import styles from "./OfferPage.module.css";
const OfferPage = (props) => {
    return (
        <section className="section">
            <div className={"container"}>
                <div className={styles.offerPageWrapper}>
                    <a className={styles.offerPageItem} target="_blank" href="https://www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%B7%D0%B0%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D1%8C%20%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80/%D0%AE%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/22.06.07/%D0%94%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%20%D0%B2%D0%BE%D0%B7%D0%BC%D0%B5%D0%B7%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BA%D1%83%D1%80%D1%8C%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3.pdf">
                        <span>Оферта</span>
                        <img src={arrow} alt="Стрелка"/>
                    </a>
                    <a className={styles.offerPageItem} target="_blank" href="https://www.cdek.ru/storage/source/docs/offer_custom.pdf">
                        <span>Договор-Оферта на оказание услуг по таможенному сопровождению</span>
                        <img src={arrow} alt="Стрелка"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default OfferPage;