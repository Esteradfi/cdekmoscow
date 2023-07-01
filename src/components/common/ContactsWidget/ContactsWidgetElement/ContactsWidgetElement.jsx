import email from "./../../../../assets/icons/email.svg";
import whatsapp from "./../../../../assets/icons/whatsapp.svg";
import phone from "./../../../../assets/icons/phone.svg";
import telegram from "./../../../../assets/icons/telegram.svg";
import styles from "./ContactsWidgetElement.module.css";

const ContactsWidgetElement = (props) => {
    let state = props.el;
    const getImage = (id) => {
        switch (id) {
            case "phone":
                return phone;
            case "email":
                return email;
            case "whatsapp":
                return whatsapp;
            case "telegram":
                return telegram
            default:
                return "";
        }
    }

    let elementImage = getImage(state.id);

    return (
        <a href={state.link} target="_blank" className={styles.contactsWidgetElement}>
            <img src={elementImage} alt={state.name}/>
            <div className={styles.contactName}>{state.name}</div>
        </a>
    )
}

export default ContactsWidgetElement;