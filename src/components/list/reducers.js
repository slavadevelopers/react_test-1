import { A_T } from './actions'

const initialState = {
    list: 'list start state'
};

function listReducer(state = initialState, action) {
    switch (action.type) {
        case A_T:
            return Object.assign({}, state, {
                list: 'good next list'
            });
            break;
        default:
            return state;
    }
}

const ListReducer = {
    list: listReducer
};

export default ListReducer;
