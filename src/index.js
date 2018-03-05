import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';

import reducers from './reducers/index.reducers'
import BlogIndex from './components/blog_index.components'
import BlogNew from './components/blog_new.components'
import BlogDetail from './components/blog_detail.components'

// The old way of routing has been commented out. Only here for reference.
// Earlier we created routes in routes.js and defined them here before the App started
// Now, with Dynmaic Routing, we don't need to do that.

// import { Router, browserHistory } from 'react-router';
// import routes from './routes';
// import App from './components/app'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* 
      <Router history={browserHistory} routes={routes}/> 
    */}
    
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={BlogNew} />
          <Route path="/posts/:id" component={BlogDetail} />
          <Route path="/" component={BlogIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
