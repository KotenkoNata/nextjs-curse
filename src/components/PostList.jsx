import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting}/>
            </Modal>)}
            <ul className={styles.posts}>
                <Post author="Test" body="Test"/>
            </ul>
        </>
    )
}

export default PostList;