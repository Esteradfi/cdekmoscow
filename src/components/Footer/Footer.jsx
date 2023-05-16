import styles from "./Footer.module.css";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setYear} from "../../redux/header-footer-reducer";
const Footer = (props) => {
    let footerState = useSelector(state => state.headerFooter);
    const dispatch = useDispatch();

    useEffect(() => {
        let date = new Date();
        dispatch(setYear(date.getFullYear()));
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={"container " + styles.footerWrapper}>
                <div className={styles.footerRow}>
                    <div className={styles.footerRowTitle + " " + styles.footerRowItem}>Контакты</div>
                    <div className={styles.footerRowItem}>
                        <a className={styles.footerRowText} href="tel:+79687441054">Договор +79687441054</a>
                        <a className={styles.footerRowText} href="tel:+74951270232">Офис +74951270232</a>
                    </div>
                    <div className={styles.footerRowItem}>
                        <div className={styles.footerRowText}>Режим работы:</div>
                        <div className={styles.footerRowText}>Пн-Пт 10:00-20:00</div>
                        <div className={styles.footerRowText}>Сб-Вс 10:00-18:00</div>
                    </div>
                </div>
                <hr className={styles.footerHr}/>
                <div className={styles.footerRow}>
                    <a target="_blank" href="https://www.cdek.ru/ru/" className={styles.footerRowItem}>
                        Официальный сайт CDEK
                    </a>
                    <NavLink to="/offer" className={styles.footerRowItem}>
                        Договор оферты
                    </NavLink>
                </div>
                <div className={styles.footerRowCenter}>CDEK <span>{footerState.year}</span></div>
            </div>
        </footer>
    )
}

export default Footer;