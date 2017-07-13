import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ListReducer } from './components/list/index'
import { ListTimeReducer } from './components/list-time/index';
import { TotalReducer } from './components/total/index';


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer,
    ...ListTimeReducer,
    ...TotalReducer
});
