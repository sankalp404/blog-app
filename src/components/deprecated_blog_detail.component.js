import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index.actions';
import { Link } from 'react-router-dom';

class BlogNew extends Component{
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
                // blog has been created, navigate to the index
                this.context.router.push('/');
            });
    }
   
     
    render(){
        const { handleSubmit, fields:{title,categories,content} } = this.props;

        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger': ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" 
                    {...title}/>
                    <div className="text-danger">{title.touched ? title.error: ''}</div>
                </div>
                    <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger': ''}`}>                   
                    <label>Categories</label>
                    <input type="text" className="form-control" 
                    {...categories}/>
                    <div className="text-danger">{categories.touched ? categories.error: ''}</div>
                </div>
                    <div className={`form-group ${content.touched && content.invalid ? 'has-danger': ''}`}>                    
                    <label>Content</label>
                    <textarea type="text" rows="7" className="form-control" 
                    {...content}/>
                    <div className="text-danger">{content.touched ? content.error: ''}</div>                    
                </div>

                <button type="submit" className="btn btn-primary m-2">
                    Publish    
                </button>
                <Link to="/" className="btn btn-danger m-2">
                    Discard    
                </Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = "Enter category";
    }
    if(!values.content){
        errors.content = "Please write some content..";
    }
    return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: first argument is config, 2nd mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
    form: 'NewBogForm',
    fields: ['title','categories','content'],
    validate
}, null, { createPost })(BlogNew);