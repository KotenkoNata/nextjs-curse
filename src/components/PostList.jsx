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
            {posts.length > 0 && (<ul className={styles.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>)}
            {posts.length === 0 && (<div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet</h2>
                <p>Start adding some!</p>
            </div>)}
        </>
    )
}

export default PostList;