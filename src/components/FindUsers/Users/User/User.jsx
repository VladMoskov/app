import React from 'react';
import s from './User.module.css';

class User extends React.Component {

    buttonValue = () => this.props.followed ? 'Fallow': 'Unfallow';

    render() {
        return (
            <div>

                <div className={s.container}>
                    <div className={s.leftSide}>
                        <img className={s.avatarImage} src={this.props.imgUrl}/>
                        <div className={s.follow}>
                            <button onClick={() => {
                                this.props.follow(this.props.id)
                            }} className={s.fallowButton}>{this.buttonValue()}</button>
                        </div>
                    </div>
                    <div className={s.rightSide}>
                        <h1 className={s.name}>{this.props.name}</h1>
                        <h1 className={s.status}>{this.props.status}</h1>
                        <h1 className={s.country}>{this.props.location.country}</h1>
                        <h1 className={s.city}>{this.props.location.city}</h1>
                    </div>
                </div>

            </div>
        );
    }
}

export default User;