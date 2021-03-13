import React from "react";
import s from "./AboutMe.module.css";

type TProps = {
    aboutMe: string | null
}

export const AboutMe: React.FC<TProps> = (props) => {


    return <div className={s.aboutMe}>
        <h2><b>About me: </b>{props.aboutMe}</h2>
    </div>
}