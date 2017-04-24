import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index.actions';
import { Link } from 'react-router';

class BlogIndex extends Component{


    componentWillMount(){
        console.log("call action to fetch posts:");
        
        this.props.fetchPosts();
    }

    renderPosts(){
        console.log(this.props.posts);
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={ "posts/"+post.id } >
                    <strong>{post.title}</strong>
                    {/*<span className="pull-right">{post.categories}</span>*/}
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
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts:state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts}, dispatch);
// }

//export default connect(null, { fetchPosts: fetchPosts})(BlogIndex);

export default connect(mapStateToProps, { fetchPosts })(BlogIndex);