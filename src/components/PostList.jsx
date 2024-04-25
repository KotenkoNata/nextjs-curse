import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
    return (
        <ul className={styles.posts}>
            <Post author='Max' body='Awesome!' />
            <Post author='Terry' body='Good!' />
        </ul>
    )
}

export default PostList;