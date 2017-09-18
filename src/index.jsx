import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router';
import App from '../containers/App';
import Index from '../containers/index';
import Blog from '../containers/blog';
import Todo from '../containers/todo';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/" component={Index}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/todo" component={Todo} />
        </Route>
    </Router>,
    document.getElementById('root')
);