import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/Profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setUserProfile(res.data);
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));