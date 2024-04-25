import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import {useState} from "react";

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [author, setAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value)
    }

    function onAuthorChange(event) {
        setAuthor(event.target.value)
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={onAuthorChange}/>
            <ul className={styles.posts}>
                <Post author={author} body={enteredBody}/>
                <Post author='Terry' body='Good!' />
            </ul>
        </>
    )
}

export default PostList;