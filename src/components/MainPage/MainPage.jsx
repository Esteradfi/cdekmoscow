import Banner from "./Banner/Banner";
import About from "./About/About";
import Offers from "./Offers/Offers";
import Integration from "./Integration/Integration";
import FormBlock from "./FormBlock/FormBlock";
import Stages from "./Stages/Stages";
import Slider from "./Slider/Slider";

const MainPage = (props) => {
    return (
        <section>
            <Banner />
            <About />
            <Offers />
            <Integration />
            <FormBlock />
            <Stages />
            <Slider />
        </section>
    )
}

export default MainPage;