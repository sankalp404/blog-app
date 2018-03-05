import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index.actions';
import { Link } from 'react-router-dom';

class BlogDetail extends Component{
    
    // to use context router oush
    // static contextTypes = {
    //     router: PropTypes.object
    // };

    componentWillMount(){
        //console.log("call action to fetch posts");
        //this.props.fetchPost(this.props.params.id);
        // COuld use caching by chekcing ==> if (!this.props.post)

        // Note: We are picking up this id from the URL
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    // Deprecated
    onDelete(){
        this.props.deletePost(this.props.params.id)
            .then(() => {
                // blog has been deleted, navigate to the index
                this.context.router.push('/');
            });
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render(){
        const { currentPost } = this.props;

        if(!currentPost){
            return <div>Loading...</div>;
        }
        return (
            <div> 
                <Link to="/">Back to Home </Link>
                <div className="card card-block">
                    <h3 className="card-title">{currentPost.title}</h3>
                    <h6>Category: {currentPost.categories}</h6>
                    <p className="card-text">{currentPost.content}</p>
                                    <button className="btn btn-danger float-right"
                        onClick={this.onDeleteClick.bind(this)}>
                        Delete post
                    </button>
                </div>
            </div>
        );
    }
}

// Posts Coming from Reducer Store
// First argument is Application state, 2nd arg is called ownProps by convention
// This is the props that is going to this component.
// As in this.props will be = to ownProps
function mapStateToProps({ posts }, ownProps){
    //return { currentPost:state.posts.currentPost };
    return { currentPost: posts[ownProps.match.params.id] }

}

export default connect(mapStateToProps, { fetchPost, deletePost })(BlogDetail);
