import { ADD_TODO } from './actions'

const initialState = {
    item: [],
    give: 'pam-param-pam'
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                give: 'good'
            });
        break;
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;

