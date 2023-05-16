import styles from "./Header.module.css";
import logo from "./../../assets/cdek-logo.jpg";
import burger from "./../../assets/icons/burger.svg";
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../../redux/header-reducer";
const Header = (props) => {
    let headerState = useSelector(state => state.header);
    const dispatch = useDispatch();

    let toggleBurgerOpen = () => {
        dispatch(toggleBurger(headerState.isOpen));
    }

    return (
        <header className={styles.header}>
            <div className={"container " + styles.headerWrapper}>
                <NavLink onClick={headerState.isOpen ? toggleBurgerOpen : ''} to="/">
                    <img className={styles.headerLogo} src={logo} alt="Логотип"/>
                </NavLink>
                <Navbar />
                <div className={styles.headerContacts}>
                    <a target="_blank" href="https://goo.gl/maps/vfwrPjrLRZHHHCKHA">
                        <div>г. Москва</div>
                        <div>Кантемировская 53 корп. 1</div>
                    </a>
                    <a href="tel:+74951270232">+74951270232</a>
                    <a href="tel:+79687441054">
                        <div>Заключить договор</div>
                        <div>+79687441054</div>
                    </a>
                </div>
                <button type="button" onClick={toggleBurgerOpen} className={headerState.isOpen ? styles.headerBurger + " " + styles.headerBurgerOpen : styles.headerBurger}>
                    <img src={burger} alt="Меню"/>
                </button>
            </div>
            <div onClick={toggleBurgerOpen} className={headerState.isOpen ? styles.headerPanelOpen : styles.headerPanel}>
                <Navbar isOpen={headerState.isOpen} />
                <div className={headerState.isOpen ? styles.headerContactsOpen : styles.headerContacts}>
                    <a target="_blank" href="https://goo.gl/maps/vfwrPjrLRZHHHCKHA">
                        <div>г. Москва</div>
                        <div>Кантемировская 53 корп. 1</div>
                    </a>
                    <a href="tel:+74951270232">+74951270232</a>
                    <a href="tel:+79687441054">
                        <div>Заключить договор</div>
                        <div>+79687441054</div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;