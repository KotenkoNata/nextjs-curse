'use client'

import classes from './image-picker.module.css';
import {useRef} from "react";

export default function ImagePicker({label, name}) {
    const imageInputRef = useRef();
    function handlePickClick() {
        imageInputRef.current.click()
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input
                className={classes.input}
                type='file'
                id={name}
                name={name}
                ref={imageInputRef}
                accept="image/png, image/jpeg"/>
            <button className={classes.button} onClick={handlePickClick} type="button">Pick an Image</button>
        </div>
    </div>
}