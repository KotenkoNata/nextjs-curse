import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";

function PostList() {


    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                <Post author='Max' body='Awesome!' />
                <Post author='Terry' body='Good!' />
            </ul>
        </>
    )
}

export default PostList;