import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import {useEffect, useState} from "react";

function PostList({isPosting, onStopPosting}) {
    const [posts, setPost] = useState([]);
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json()
            setPost(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setPost((existingPosts)=>[postData, ...existingPosts]);
    }
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
            </Modal>)}
            {!isFetching && posts.length > 0 && (<ul className={styles.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
            </ul>)}
            {!isFetching && posts.length === 0 && (<div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet</h2>
                <p>Start adding some!</p>
            </div>)}
            {isFetching && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    )
}

export default PostList;