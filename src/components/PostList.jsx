import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import {useState} from "react";
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {
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
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onBodyChange={changeBodyHandler}
                         onCancel={onStopPosting}
                         onAuthorChange={onAuthorChange}/>
            </Modal>)}
            <ul className={styles.posts}>
                <Post author={author} body={enteredBody}/>
                <Post author='Terry' body='Good!' />
            </ul>
        </>
    )
}

export default PostList;