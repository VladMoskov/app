import React, {useRef, useState} from 'react';
import s from './Avatar.module.css';
import close from './../../../../images/close.svg';
import {ProfileAPI} from "../../../../API/API";

export const AvatarModal = ({modalToggle}) => {

    const [currentImage, setCurrentImage] = useState(null);
    const inputRef = useRef(null)

    const uploadPhoto = () => {
        let formData = new FormData();
        formData.append('image', currentImage)
        ProfileAPI.updateAvatar(formData).then(res => console.log(res.data))
        console.log(currentImage);
    }

    return <div className={s.modal}>
        <img className={s.close} src={close} alt={'X'} onClick={modalToggle}/>
        <div className={s.modalBox}>
            <div><h3>Upload new Avatar</h3></div>
            <input ref={inputRef} type={'file'} onChange={(e)=>setCurrentImage(e.target.files[0])}/>
            <button onClick={uploadPhoto}>Upload</button>
        </div>
    </div>
}