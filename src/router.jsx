import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import Index from '../containers/index';
import Blog from '../containers/blog';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="/" component={Index} />
        <Route path="blog" component={Blog} />
    </Route>

);

export default route;

