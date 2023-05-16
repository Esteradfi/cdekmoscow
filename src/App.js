import './App.css';
import ContactsWidget from "./components/common/ContactsWidget/ContactsWidget";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CalcPage from "./components/CalcPage/CalcPage";
import ContractPage from "./components/ContractPage/ContractPage";
import OfferPage from "./components/OfferPage/OfferPage";

function App() {
  return (
    <div className="App">
        <div className="AppContent">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/calculator" element={<CalcPage />}/>
                    <Route path="/contract" element={<ContractPage />}/>
                    <Route path="/offer" element={<OfferPage />}/>
                </Routes>
            </main>
            <ContactsWidget />
        </div>
        <Footer />
    </div>
  );
}

export default App;
