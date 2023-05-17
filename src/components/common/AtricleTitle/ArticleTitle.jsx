import styles from "./ArticleTitle.module.css";
const ArticleTitle = (props) => {
    return (
        <h2 className={styles.articleTitle}>
            {props.title}
        </h2>
    )
}

export default ArticleTitle;