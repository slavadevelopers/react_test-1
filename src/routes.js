import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeRoutes } from './pages/home/index';
import ErrorPage from './pages/error/index';


export default (
        <Switch>
            { HomeRoutes }
            <Route path='*' component={ ErrorPage } />
        </Switch>
);
