import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index.actions';
import { Link } from 'react-router';

class BlogDetail extends Component{
    
    // to use context router oush
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount(){
        //console.log("call action to fetch posts");
        this.props.fetchPost(this.props.params.id);
    }

    onDelete(){
        this.props.deletePost(this.props.params.id)
            .then(() => {
                // blog has been deleted, navigate to the index
                this.context.router.push('/');
            });
    }

    render(){
        const { currentPost } = this.props;

        if(!currentPost){
            return <div>Loading...</div>;
        }
        return (
            <div className="card card-block">
                <Link to="/">Back to Home </Link>
                <h3 className="card-title">{currentPost.title}</h3>
                <h6>Category: {currentPost.categories}</h6>
                <p className="card-text">{currentPost.content}</p>
                                <button className="btn btn-danger float-right"
                    onClick={this.onDelete.bind(this)}>
                    Delete post
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { currentPost:state.posts.currentPost };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(BlogDetail);
