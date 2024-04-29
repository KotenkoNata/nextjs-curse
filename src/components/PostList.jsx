import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import {useState} from "react";
import Modal from "./Modal";

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [author, setAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function hideModalHandler() {
        setModalIsVisible(false)
    }
    
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value)
    }

    function onAuthorChange(event) {
        setAuthor(event.target.value)
    }

    return (
        <>
            {modalIsVisible ? <Modal onClose={hideModalHandler}>
                <NewPost onBodyChange={changeBodyHandler} onAuthorChange={onAuthorChange}/>
            </Modal> : null}
            <ul className={styles.posts}>
                <Post author={author} body={enteredBody}/>
                <Post author='Terry' body='Good!' />
            </ul>
        </>
    )
}

export default PostList;