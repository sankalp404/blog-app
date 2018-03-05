// DEPRECATED

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.components';
import BlogIndex from './components/blog_index.components';
import BlogNew from './components/blog_new.components';
import BlogDetail from './components/blog_detail.components'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BlogIndex} />
        <Route path="posts/new" component={BlogNew} />
        <Route path="posts/:id" component={BlogDetail} />
    </Route>
);

// this.props.params.id 