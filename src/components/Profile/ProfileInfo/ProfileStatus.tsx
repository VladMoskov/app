import React, {useState} from 'react';

type TProps = {
    setUserStatus: (status: string) => void
    updateUserStatus: (status: string) => void
    userStatus: string
}

export const ProfileStatus: React.FC<TProps> = (props) => {

    const [status, setStatus] = useState<string>('');
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <>
            {!editMode &&
            <div>
                <h3 onDoubleClick={() => setEditMode(true)}>
                    {props.userStatus === ''
                        ? <i>have not status</i>
                        : props.userStatus
                    }
                </h3>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={(e) => setStatus(e.target.value)}
                    autoFocus={true}
                    onBlur={() => {
                        setEditMode(false);
                        if (status !== props.userStatus)
                            props.updateUserStatus(status); // PUT request
                    }}
                    value={status}
                />
            </div>
            }
        </>
    )

}
