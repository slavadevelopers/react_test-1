import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home/index';
import { ListReducer } from './components/list/index'


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer
});
