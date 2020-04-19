import React from 'react';
import {history} from '../config/History'
import {Router, Switch, Route} from 'react-router'
import PrivateRoute from '../config/PrivateRoute';


import Login from '../page/login/index';
import Dashboard from '../page/dashboard/index';
import NotFound from '../page/not-found';
import Authenticated from '../page/authenticated/index';
import Unauthenticated from '../page/unauthenticated/index';


const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route exact path="/unauthenticated" component={Unauthenticated}/>
            <Route exact path="/authenticated" component={Authenticated}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/" component={Login}/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
);

export default  Routes;