import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addNewPost,
    getUserProfile,
    getUserStatus,
    setUserProfile,
    setUserStatus,
    updateUserStatus
} from "../../redux/Profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {follow} from "../../redux/Users-reduser";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 13212;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
      if (!this.props.isAuth)
            return <Redirect to='/login'/>
        return <Profile profile={this.props.profile}
                        id={this.props.id}
                        setUserStatus={this.props.setUserStatus}
                        updateUserStatus={this.props.updateUserStatus}
                        userStatus={this.props.userStatus}
                        addNewPost={this.props.addNewPost}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.userAuth.isAuth,
        userStatus: state.profilePage.userStatus
    }
};

export default connect(mapStateToProps, {addNewPost, updateUserStatus, setUserStatus, setUserProfile, follow, getUserProfile, getUserStatus})(withRouter(ProfileContainer));