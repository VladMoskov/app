import React, {useState} from 'react';
import s from './NewPostForm.module.css';

type TProps = {
    addNewPost: (inputText: string) => void
}

export const NewPostForm: React.FC<TProps>= (props) => {

    const [inputText, setInputText] = useState<string>('');
    return (
        <div className={s.postForm}>
            <h1>My new post</h1>
            <input onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
            <button onClick={() => props.addNewPost(inputText)}/>
            <hr className={s.hr}/>
        </div>
    );
}
