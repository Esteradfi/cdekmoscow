import {useDispatch, useSelector} from "react-redux";
import {
    updateBik,
    updateCertificateIssueDate,
    updateCertificateNumber, updateCheckingAccount, updateCity,
    updateComment, updateDirectorName,
    updateEmail, updateInn, updateIsWebStore, updateLegalAddress,
    updateName,
    updateOrganizationName,
    updatePhone, updatePointAddress, updateWebStore, changeIsAgree
} from "../../redux/questionnaire-page-reducer";
import styles from "./QuestionnairePage.module.css";


const QuestionnairePage = (props) => {
    let questionnaireState = useSelector(state => state.questionnairePage);
    let name = questionnaireState.name;
    let phone = questionnaireState.phone;
    let organizationName = questionnaireState.organizationName;
    let inn = questionnaireState.inn;
    let legalAddress = questionnaireState.legalAddress;
    let certificateNumber = questionnaireState.certificateNumber;
    let certificateIssueDate = questionnaireState.certificateIssueDate;
    let bik = questionnaireState.bik;
    let checkingAccount = questionnaireState.checkingAccount;
    let directorName = questionnaireState.directorName;
    let email = questionnaireState.email;
    let comment = questionnaireState.comment;
    let pointAddress = questionnaireState.pointAddress;
    let city = questionnaireState.city;
    let isWebStore = questionnaireState.isWebStore;
    let webStore = questionnaireState.webStore;
    let isAgree = questionnaireState.isAgree;

    let dispatch = useDispatch();

    let onNewOrganizationName = (e) => {
        let newOrganizationName = e.target.value;
        dispatch(updateOrganizationName(newOrganizationName));
    }
    const onNewPhone = (e) => {
        let newPhone = e.target.value;
        dispatch(updatePhone(newPhone));
    }
    const onNewInn = (e) => {
        let newInn = e.target.value;
        dispatch(updateInn(newInn));
    }
    const onNewLegalAddress = (e) => {
        let newLegalAddress = e.target.value;
        dispatch(updateLegalAddress(newLegalAddress));
    }
    const onNewCertificateNumber = (e) => {
        let newCertificateNumber = e.target.value;
        dispatch(updateCertificateNumber(newCertificateNumber));
    }
    const onNewCertificateIssueDate = (e) => {
        let newCertificateIssueDate = e.target.value;
        dispatch(updateCertificateIssueDate(newCertificateIssueDate));
    }
    const onNewBik = (e) => {
        let newBik = e.target.value;
        dispatch(updateBik(newBik));
    }
    const onNewCheckingAccount = (e) => {
        let newCheckingAccount = e.target.value;
        dispatch(updateCheckingAccount(newCheckingAccount));
    }
    const onNewDirectorName = (e) => {
        let newDirectorName = e.target.value;
        dispatch(updateDirectorName(newDirectorName));
    }
    const onNewPointAddress = (e) => {
        let newPointAddress = e.target.value;
        dispatch(updatePointAddress(newPointAddress));
    }
    const onNewCity = (e) => {
        let newCity = e.target.value;
        dispatch(updateCity(newCity));
    }
    const onNewIsWebStore = (e) => {
        let newIsWebStore = e.target.value;
        dispatch(updateIsWebStore(newIsWebStore));
    }
    const onNewWebStore = (e) => {
        let newWebStore = e.target.value;
        dispatch(updateWebStore(newWebStore));
    }
    const onNewComment = (e) => {
        let newComment = e.target.value;
        dispatch(updateComment(newComment));
    }
    const onNewEmail = (e) => {
        let newEmail = e.target.value;
        dispatch(updateEmail(newEmail));
    }
    const onNewName = (e) => {
        let newName = e.target.value;
        dispatch(updateName(newName));
    }

    const clickChangeIsAgree = () => {
        dispatch(changeIsAgree(isAgree));
    }

    return (
        <section className={"section "}>
            <article className="container ">
                <form action="" method="" name="questionnaire-form" id="questionnaire-form" className={"verticalForm"}>
                    <label htmlFor="name" className={"verticalLabel"}>
                        Контактное лицо
                    </label>
                    <input name="name" id="name" onChange={onNewName} value={name} className={"verticalInput"} required type="text" autoComplete="name" placeholder="Иван Петров"/>
                    <label htmlFor="phone" className={"verticalLabel"}>
                        Телефон
                    </label>
                    <input name="phone" id="phone" onChange={onNewPhone} value={phone} className={"verticalInput"} required type="tel" autoComplete="tel" placeholder="Контактный телефон"/>
                    <label htmlFor="organizationName" className={"verticalLabel"}>
                        Наименование
                    </label>
                    <input name="organizationName" id="organizationName" onChange={onNewOrganizationName} value={organizationName} className={"verticalInput"} required type="text" placeholder="Введите наименование организации"/>
                    <label htmlFor="inn" className={"verticalLabel"}>
                        ИНН
                    </label>
                    <input name="inn" id="inn" onChange={onNewInn} value={inn} className={"verticalInput"} required type="text" placeholder="ИНН вашей организации"/>
                    <label htmlFor="legalAddress" className={"verticalLabel"}>
                        Юридический адрес
                    </label>
                    <input name="legalAddress" id="legalAddress" onChange={onNewLegalAddress} value={legalAddress} className={"verticalInput"} required type="text" placeholder="Юридический адрес"/>
                    <label htmlFor="certificateNumber" className={"verticalLabel"}>
                        Номер свидетельства
                        <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                    </label>
                    <input name="certificateNumber" id="certificateNumber" onChange={onNewCertificateNumber} value={certificateNumber} className={"verticalInput"} type="text" placeholder="Номер свидетельства о регистрации"/>
                    <label htmlFor="certificateIssueDate" className={"verticalLabel"}>
                        Дата выдачи свидетельства о регистрации
                        <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                    </label>
                    <input name="certificateIssueDate" id="certificateIssueDate" onChange={onNewCertificateIssueDate} value={certificateIssueDate} className={"verticalInput"} type="date" placeholder="Дата выдачи свидетельства"/>
                    <label htmlFor="bik" className={"verticalLabel"}>
                        БИК
                    </label>
                    <input name="bik" id="bik" onChange={onNewBik} value={bik} className={"verticalInput"} required type="text" placeholder="БИК вашего банка"/>
                    <label htmlFor="checkingAccount" className={"verticalLabel"}>
                        Расчётный счет
                    </label>
                    <input name="checkingAccount" id="checkingAccount" onChange={onNewCheckingAccount} value={checkingAccount} className={"verticalInput"} required type="text" placeholder="Расчётный счет вашей организации"/>
                    <label htmlFor="directorName" className={"verticalLabel"}>
                        ФИО Директора
                    </label>
                    <input name="directorName" id="directorName" onChange={onNewDirectorName} value={directorName} className={"verticalInput"} required type="text" placeholder="Иванов Иван Иванович"/>
                    <label htmlFor="email" className={"verticalLabel"}>
                        E-mail
                    </label>
                    <input name="email" id="email" onChange={onNewEmail} value={email} className={"verticalInput"} required type="email" placeholder="Ваш E-mail"/>
                    <label htmlFor="comment" className={"verticalLabel"}>
                        Комментарий
                        <small className={"verticalSmall"}>(Не обязательно к заполнению)</small>
                    </label>
                    <textarea name="comment" id="comment" onChange={onNewComment} className={"verticalTextarea"} value={comment}></textarea>
                    <label htmlFor="pointAddress" className={"verticalLabel"}>
                        Адрес пункта выдачи
                    </label>
                    <input name="pointAddress" id="pointAddress" onChange={onNewPointAddress} value={pointAddress} className={"verticalInput"} required type="text" placeholder="Адрес пункта выдачи для возвратов"/>
                    <label htmlFor="city" className={"verticalLabel"}>
                        Город
                    </label>
                    <input name="city" id="city" onChange={onNewCity} value={city} className={"verticalInput"} required type="text" placeholder="Ваш город"/>
                    <label htmlFor="isWebStore" className={"verticalLabel"}>
                        Интернет-магазин
                    </label>
                    <div className={"inputsGroup"}>
                        <label htmlFor="isWebStoreTrue" className="custom-radio">
                            <input name="isWebStore" id="isWebStoreTrue" onChange={onNewIsWebStore} value="1" type="radio" />
                            <span className="custom-radio-span"></span>
                            <span className="horizontalFormSpan">Да</span>
                        </label>
                        <label htmlFor="isWebStoreFalse" className="custom-radio">
                            <input name="isWebStore" id="isWebStoreFalse" onChange={onNewIsWebStore} value="" type="radio" />
                            <span className="custom-radio-span"></span>
                            <span className="horizontalFormSpan">Нет</span>
                        </label>
                    </div>
                    <div className={isWebStore ? "visibleVerticalInput" : "hiddenVerticalInput"}>
                        <label htmlFor="webStore" className={"verticalLabel"}>
                            Ссылка на интернет-магазин
                        </label>
                        <input name="webStore" id="webStore" onChange={onNewWebStore} value={webStore} className={"verticalInput"} required type="url" placeholder="Ссылка на ваш интернет-магазин"/>
                    </div>
                    <div className={styles.checkboxBlock}>
                        <label htmlFor="isAgree" className="custom-checkboxes" onClick={clickChangeIsAgree}>
                            <input name="isAgree" id="isAgree" type="checkbox" required />
                            <span className="custom-checkboxes-span"></span>
                            <span className="horizontalFormSpan">Согласие на обработку персональных данных</span>
                        </label>
                    </div>
                    <input className={"verticalSubmit"} type="submit"/>
                </form>
            </article>
        </section>
    )
}

export default QuestionnairePage;