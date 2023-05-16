import './App.css';
import ContactsWidget from "./components/common/ContactsWidget/ContactsWidget";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import CalcPage from "./components/CalcPage/CalcPage";
import ContractPage from "./components/ContractPage/ContractPage";

function App() {
  return (
    <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/calculator" element={<CalcPage />}/>
                <Route path="/contract" element={<ContractPage />}/>
            </Routes>
        </main>
        <ContactsWidget />
        <Footer />
    </div>
  );
}

export default App;
