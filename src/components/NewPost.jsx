import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost({onBodyChange, onAuthorChange, onCancel }) {

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

        console.log(postData)
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={onBodyChange}>
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
    );
}

export default NewPost;