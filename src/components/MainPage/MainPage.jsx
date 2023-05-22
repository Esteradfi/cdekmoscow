import Banner from "./Banner/Banner";
import About from "./About/About";
import Offers from "./Offers/Offers";
import Integration from "./Integration/Integration";
import FormBlock from "./FormBlock/FormBlock";
import Stages from "./Stages/Stages";
import styles from "./MainPage.module.css";
import SliderBlock from "./SliderBlock/SliderBlock";

const MainPage = (props) => {
    return (
        <section className={styles.mainPage}>
            <Banner />
            <About />
            <Offers />
            <Integration />
            <FormBlock />
            <Stages />
            <SliderBlock />
        </section>
    )
}

export default MainPage;