import React from 'react';
import { Route } from 'react-router';
import HomePage from './home';

export default (
    <Route exact component={ HomePage } path={ HomePage.path } />
);
