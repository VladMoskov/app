import React from "react";
import s from "./LoockingForAJob.module.css";

type TProps = {
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
}

export const LoockingForAJob: React.FC<TProps> = (props) => {


        return <div className={s.lookingForAJobDescription}>
                <h2><b>Looking for a job: </b>
                    {props.lookingForAJobDescription}
                </h2>
        </div>
    }