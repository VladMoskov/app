import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    setTotalUserCount
} from "../../../redux/Users-reduser";
import User from "./User/User";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
        this.props.setCurrentPage(page);
    }

    render(){
        return (
            <div>
                <Users users={this.props.users
                    .map(user => <User id={user.id}
                                       name={user.name}
                                       followed={user.followed}
                                       follow={this.props.follow}
                                       imgUrl={user.photos.small}
                                       followingInProgress={this.props.followingInProgress}/>
                                        )}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       setCurrentPage={this.setCurrentPage}
                       currentPage={this.props.currentPage}
                       isFetching={this.props.isFetching}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, setCurrentPage, setTotalUserCount, getUsers})(UsersContainer);