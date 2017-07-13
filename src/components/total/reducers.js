import { SALE_CHECKED } from './actions'

const initialState = {
    total: false
};

function totalReducer(state = initialState, action) {
    switch (action.type) {
        case SALE_CHECKED:
            state.total = !state.total;
            return Object.assign({}, state, {
                total: state.total
            });
        break;

        default:
            return state;
    }
}

const TotalReducer = {
    total: totalReducer
};

export default TotalReducer;
