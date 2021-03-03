import {connect} from "react-redux";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const PostsCintainer = connect(mapStateToProps)(Posts);

export default PostsCintainer;