import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index.actions';

class BlogDetail extends Component{

    componentWillMount(){
        //console.log("call action to fetch posts");
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        const { currentPost } = this.props;

        if(!currentPost){
            return <div>Loading...</div>;
        }
        console.log(currentPost.title);
        return (
            <div className="card card-block">
                <h3 className="card-title">{currentPost.title}</h3>
                <h6>Category: {currentPost.categories}</h6>
                <p className="card-text">{currentPost.content}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { currentPost:state.posts.currentPost };
}

export default connect(mapStateToProps, { fetchPost })(BlogDetail);
