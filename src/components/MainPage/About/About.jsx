import ArticleTitle from "../../common/AtricleTitle/ArticleTitle";
import {useSelector} from "react-redux";
import AboutItem from "./AboutItem/AboutItem";
import styles from "./About.module.css";

const About = (props) => {
    let aboutState = useSelector(state => state.about);
    let aboutItems = aboutState.items.map(el => <AboutItem key={el.id} el={el} />)

    return (
        <article className={"container"}>
            <ArticleTitle title={"Почему выбирают CDEK?"} />
            <div className={styles.aboutItems}>
                {aboutItems}
            </div>
        </article>
    )
}

export default About;