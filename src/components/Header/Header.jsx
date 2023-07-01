import styles from "./Header.module.css";
import logo from "./../../assets/cdek-logo.jpg";
import burger from "./../../assets/icons/burger.svg";
import {NavLink} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {toggleBurger} from "../../redux/header-footer-reducer";
const Header = (props) => {
    let headerState = useSelector(state => state.headerFooter);
    const dispatch = useDispatch();

    const toggleBurgerOpen = () => {
        dispatch(toggleBurger(headerState.isOpen));
    }

    return (
        <header className={styles.header}>
            <div className={"container " + styles.headerWrapper}>
                <NavLink onClick={headerState.isOpen ? toggleBurgerOpen : ''} to="/">
                    <img className={styles.headerLogo} src={logo} alt="Логотип"/>
                </NavLink>
                <Navbar />
                <div className={styles.headerContacts}></div>
                <button type="button" onClick={toggleBurgerOpen} className={headerState.isOpen ? styles.headerBurger + " " + styles.headerBurgerOpen : styles.headerBurger}>
                    <img src={burger} alt="Меню"/>
                </button>
            </div>
            <div onClick={toggleBurgerOpen} className={headerState.isOpen ? styles.headerPanelOpen : styles.headerPanel}>
                <Navbar isOpen={headerState.isOpen} />
            </div>
        </header>
    )
}

export default Header;