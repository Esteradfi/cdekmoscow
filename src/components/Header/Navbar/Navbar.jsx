import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    let isOpen = props.isOpen;

    return (
        <nav className={isOpen ? styles.navbarOpen : styles.navbar}>
            <NavLink to="/">
                Преимущества
            </NavLink>
            <NavLink to="/">
                Наши клиенты
            </NavLink>
            <NavLink to="/contract">
                Заключить договор
            </NavLink>
            <NavLink to="/calculator">
                Рассчитать стоимость
            </NavLink>
        </nav>
    )
}

export default Navbar;