import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index.actions';
import { Link } from 'react-router-dom';
import _ from 'lodash'

class BlogIndex extends Component{

    componentWillMount(){        
        this.props.fetchPosts();
    }

    renderPosts(){
        //console.log(this.props.posts);
        return _.map(this.props.posts, post => {
            //console.log(post)
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });   
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary float-right" >
                        Add a Post
                    </Link>
                </div>
                <h3>Posts:</h3>
                <ul className="list-group p-2">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    // return { posts:state.posts.all };
    return { posts: state.posts }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts}, dispatch);
// }

// Instead of what we did above with mapDispatchToProps, we are telling 
// connect (react-redux) to do it for us.

//export default connect(null, { fetchPosts: fetchPosts})(BlogIndex);

export default connect(mapStateToProps, { fetchPosts })(BlogIndex);