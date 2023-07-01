import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    let isOpen = props.isOpen;

    return (
        <nav className={isOpen ? styles.navbarOpen : styles.navbar}>
            <NavLink to="/" className={styles.navbarItem}>
                Главная
            </NavLink>
            <NavLink to="/contract" className={styles.navbarItem}>
                Заключить договор
            </NavLink>
            {isOpen ? <>
                <NavLink to="/questionnaire-self" className={styles.navbarItem}>
                    Заполнить анкету для самозанятых
                </NavLink>
                <NavLink to="/questionnaire" className={styles.navbarItem}>
                    Заполнить анкету для ИП и ООО
                </NavLink>
            </> : <div className={styles.navbarDrop}>
                <div className={styles.navbarItem}>
                    Заполнить анкету
                </div>
                <NavLink to="/questionnaire-self" className={styles.navbarItem + " " + styles.navbarDropItem}>
                    Для самозанятых
                </NavLink>
                <NavLink to="/questionnaire" className={styles.navbarItem + " " + styles.navbarDropItem}>
                    Для ИП и ООО
                </NavLink>
            </div>}
            <NavLink to="/calculator" className={styles.navbarItem}>
                Рассчитать стоимость
            </NavLink>
            <div className={styles.navbarItem}>
                <a target="_blank"
                   href="https://yandex.ru/maps/213/moscow/house/kantemirovskaya_ulitsa_53k1/Z04YcAJgQE0GQFtvfXpydnlnZA==/?indoorLevel=1&ll=37.650981%2C55.637540&z=17.09">
                    <div>г. Москва</div>
                    <div>Кантемировская 53 корп. 1</div>
                </a>
                <a href="tel:+74951270232">+7 (495) 127-02-32</a>
            </div>
            <a href="tel:+79687441054" className={styles.navbarItem}>
                <div>Заключить договор</div>
                <div>+7 (968) 744-10-54</div>
            </a>
        </nav>
    )
}

export default Navbar;