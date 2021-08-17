import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/home';
import Auth from './containers/auth';
import DetailPhoto from './containers/detail-photo';

export default (
	<div>
        <Route exact path="/js-diploma/" component={Home} />
        <Route path="/js-diploma/auth" component={Auth} />
        <Route path="/js-diploma/photo/:id" component={DetailPhoto} />
    </div>
);
