import classes from './NewPost.module.css';
import {useState} from "react";
import Modal from "../components/Modal";

function NewPost({onCancel, onAddPost }) {

    const [enteredBody, setEnteredBody] = useState('');
    const [author, setAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value)
    }

    function onAuthorChange(event) {
        setAuthor(event.target.value)
    }
    
    function submitHandler(event) {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: author,
        }

        onAddPost(postData)
        onCancel();
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={onAuthorChange}/>
                </p>
                <p className={classes.actions}>
                    <button type={"button"} onClick={onCancel}>Cancel</button>
                    <button onClick={submitHandler}>Submit</button>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;