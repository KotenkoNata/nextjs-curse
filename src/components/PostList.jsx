import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import {useState} from "react";

function PostList({isPosting, onStopPosting}) {
    const [posts, setPost] = useState([]);

    function addPostHandler(postData) {
        setPost((existingPosts)=>[postData, ...existingPosts]);
    }
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
            </Modal>)}
            <ul className={styles.posts}>
                <Post author="Test" body="Test"/>
            </ul>
        </>
    )
}

export default PostList;