import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ListReducer } from './components/list/index'
import { ListTimeReducer } from './components/list-time/index'


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer,
    ...ListTimeReducer
});
