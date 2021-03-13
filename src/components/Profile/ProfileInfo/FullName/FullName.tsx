import React from "react";
import s from "./FullName.module.css";

type TProps = {
    fullName: string | null
}

export const FullName: React.FC<TProps> = (props) => {


        return <div className={s.foolName}>
            <h1>
                {props.fullName}
            </h1>
        </div>
    }