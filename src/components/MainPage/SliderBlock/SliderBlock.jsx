import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import styles from "./SliderBlock.module.css";
import {useSelector} from "react-redux";
import p1 from "./../../../assets/slider/p1.png";
import p2 from "./../../../assets/slider/p2.png";
import p3 from "./../../../assets/slider/p3.png";
import p4 from "./../../../assets/slider/p4.png";
import p5 from "./../../../assets/slider/p5.png";
import p6 from "./../../../assets/slider/p6.png";
import p7 from "./../../../assets/slider/p7.png";
import p8 from "./../../../assets/slider/p8.png";
import p9 from "./../../../assets/slider/p9.png";
import p10 from "./../../../assets/slider/p10.png";
import p11 from "./../../../assets/slider/p11.png";
import p12 from "./../../../assets/slider/p12.png";
import p13 from "./../../../assets/slider/p13.png";
import p14 from "./../../../assets/slider/p14.png";
import p15 from "./../../../assets/slider/p15.png";
import p16 from "./../../../assets/slider/p16.png";
import p17 from "./../../../assets/slider/p17.png";
import p18 from "./../../../assets/slider/p18.png";
import { register } from 'swiper/element/bundle';
register();
const SliderBlock = (props) => {
    let sliderState = useSelector(state => state.slider.items);
    let windowInnerWidth = window.innerWidth;
    let slidesPerView = windowInnerWidth > 1150 ? 3 : windowInnerWidth > 767 ? 2 : 1;


    const getImage = (id) => {
        switch (id) {
            case "p1":
                return p1;
            case "p2":
                return p2;
            case "p3":
                return p3;
            case "p4":
                return p4;
            case "p5":
                return p5;
            case "p6":
                return p6;
            case "p7":
                return p7;
            case "p8":
                return p8;
            case "p9":
                return p9;
            case "p10":
                return p10;
            case "p11":
                return p11;
            case "p12":
                return p12;
            case "p13":
                return p13;
            case "p14":
                return p14;
            case "p15":
                return p15;
            case "p16":
                return p16;
            case "p17":
                return p17;
            case "p18":
                return p18;
            default:
                return "";
        }
    }


    let sliderItems = sliderState.map(el => <swiper-slide key={el.id}><img src={getImage(el.id)} alt={el.name}/></swiper-slide>)

    return (
        <article className={"container "}>
            <ArticleTitle title="Нам доверяют" />
            <swiper-container slides-per-view={slidesPerView}
                              speed="500" loop="true"
                              css-mode="true"
                              navigation="true"
                              style={{
                                  "--swiper-theme-color": "#00843e",
                              }}
            >
                {sliderItems}
            </swiper-container>
        </article>
    )
}

export default SliderBlock;