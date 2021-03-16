import React, {useState} from 'react';
import s from "../ProfileInfo.module.css";
import {AvatarModal} from './AvatarModal';
import profileImage from "../../../../images/profileImage.png";

export const Avatar: React.FC<{ photo: string | null | undefined}> = ({photo}) => {

    const [isModal, setIsModal] = useState(false);

    const modalToggle = () => {
        setIsModal(!isModal);
        console.log(`modal is ${isModal}`);
    }

    return <div>
            <img
                className={s.avatar}
                src={photo || profileImage}
                alt={""}
                onClick={() => modalToggle()}
            />
        {isModal && <AvatarModal modalToggle={modalToggle}/>}
    </div>
}