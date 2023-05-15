import styles from "./ContactsWidget.module.css";
import messengerIcon from "../../../assets/icons/messenger.svg";
import closeWidget from "./../../../assets/icons/close.svg";
import {useDispatch, useSelector} from "react-redux";
import {toggleWidget} from "../../../redux/contacts-widget-reducer";
import ContactsWidgetElement from "./ContactsWidgetElement/ContactsWidgetElement";

const ContactsWidget = (props) => {
    let widgetState = useSelector(state => state.contactsWidget);
    const dispatch = useDispatch();
    let ContactsWidgetElements = widgetState.contacts.map(el => <ContactsWidgetElement key={el.id} el={el}/>);

    let toggleWidgetOpen = () => {
        dispatch(toggleWidget(widgetState.isOpen));
    }

    return (
        <div className={styles.contactsWidget}>
            <div className={widgetState.isOpen ? styles.widgetWindow : styles.widgetWindowClose}>
                <div className={styles.widgetTitle}>Свяжитесь с нами</div>
                <div className={styles.widgetElementsWrapper}>
                    {ContactsWidgetElements}
                </div>
            </div>
            <button type="button" onClick={toggleWidgetOpen} className={widgetState.isOpen ? styles.widgetButton + ' ' + styles.widgetButtonOpen : styles.widgetButton}>
                <img src={widgetState.isOpen ? closeWidget : messengerIcon} alt="Связаться с нами"/>
            </button>
        </div>
    )
}

export default ContactsWidget;