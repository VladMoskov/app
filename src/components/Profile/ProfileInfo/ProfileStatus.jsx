import React from 'react';

class ProfileStatus extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status);
    }

    changeUserStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <h3 onDoubleClick={this.activateEditMode}>{this.props.userStatus}</h3>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.changeUserStatus} autoFocus={true} onMouseLeave={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;