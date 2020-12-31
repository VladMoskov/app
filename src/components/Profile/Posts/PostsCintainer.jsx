import React from 'react';
import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.postsPage.postsData,
    }
}

const PostsCintainer = connect(mapStateToProps)(Posts);

export default PostsCintainer;