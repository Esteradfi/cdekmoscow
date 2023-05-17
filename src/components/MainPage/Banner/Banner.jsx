import styles from "./Banner.module.css";
import  banner from "./../../../assets/background.png";
import {NavLink} from "react-router-dom";
const Banner = (props) => {
    return (
        <article className={styles.banner} style={{ backgroundImage: `url(${banner})` }}>
            <div className={"container " + styles.bannerWrapper}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerText}>
                        CDEK — выбор <span className={styles.bannerTextGreen}>более чем трети</span> <span className={styles.bannerTextNowrap}>интернет-магазинов</span> России
                    </div>
                    <NavLink to="/contract" className={styles.bannerLink}>
                        Оставить заявку
                    </NavLink>
                </div>
            </div>
        </article>
    )
}

export default Banner;