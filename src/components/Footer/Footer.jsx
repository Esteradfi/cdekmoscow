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
            <div className={"container "}>
                <div className={styles.footerRow}>
                    <div className={styles.footerRowTitle + " " + styles.footerRowItem}>Контакты</div>
                    <div className={styles.footerRowItem + ' ' + styles.footerRowCenter}>
                        <a className={styles.footerRowText} href="tel:+79687441054">Договор +79687441054</a>
                        <a className={styles.footerRowText} href="tel:+74951270232">Офис +74951270232</a>
                    </div>
                    <div className={styles.footerRowItem}>
                        <div className={styles.footerRowText}>Режим работы:</div>
                        <div className={styles.footerRowText}>Звонок:</div>
                        <div className={styles.footerRowText}>Пн-Пт 10:00-20:00</div>
                        <div className={styles.footerRowText}>Сб-Вс 10:00-18:00</div>
                        <div className={styles.footerRowText}>WhatsApp, Email: 24/7</div>
                    </div>
                </div>
                <hr className={styles.footerHr}/>
                <div className={styles.footerRow}>
                    <a target="_blank" href="//www.cdek.ru/ru/" className={styles.footerRowItem}>
                        Официальный сайт CDEK
                    </a>
                    <a target="_blank" href="//www.cdek.ru/storage/source/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8_%D0%9F%D0%94%D0%BD_%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_01_09_22.pdf" className={styles.footerRowItem + " " + styles.footerRowRight}>
                        Политика конфиденциальности
                    </a>
                    <NavLink to="/offer" className={styles.footerRowItem}>
                        Договор оферты
                    </NavLink>
                </div>
                <div className={styles.footerRowYear}>CDEK <span>{footerState.year}</span></div>
            </div>
        </footer>
    )
}

export default Footer;