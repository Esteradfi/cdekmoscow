import './App.css';
import ContactsWidget from "./components/common/ContactsWidget/ContactsWidget";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CalcPage from "./components/CalcPage/CalcPage";
import ContractPage from "./components/ContractPage/ContractPage";
import OfferPage from "./components/OfferPage/OfferPage";
import QuestionnairePage from "./components/QuestionnairePage/QuestionnairePage";
import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";
import {useSelector} from "react-redux";
import QuestionnaireSelfPage from "./components/QuestionnaireSelfPage/QuestionnaireSelfPage";

function App() {
    let tariffsIsOpen = useSelector(state => state.calc.tariffsIsOpen);
  return (
    <div className={tariffsIsOpen ? "App App-no-scroll" : "App"}>
        <div className="AppContent">
            <Header />
            <main>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<MainPage />}/>
                        <Route path="/calculator" element={<CalcPage />}/>
                        <Route path="/questionnaire" element={<QuestionnairePage />}/>
                        <Route path="/questionnaire-self" element={<QuestionnaireSelfPage />}/>
                        <Route path="/contract" element={<ContractPage />}/>
                        <Route path="/offer" element={<OfferPage />}/>
                    </Routes>
                </ScrollToTop>
            </main>
            <ContactsWidget />
        </div>
        <Footer />
    </div>
  );
}

export default App;
