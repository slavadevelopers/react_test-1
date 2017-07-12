import { CHOISE_ELEMENT_TIME } from './actions'

const initialState = {
    itemTime: [
        {
            id: 1,
            text: '1text',
            active: false,
            disable: false
        },
        {
            id: 2,
            text: '2text',
            active: false,
            disable: false
        },
        {
            id: 3,
            text: '3text',
            active: false,
            disable: false
        }
    ],
};

function listTimeReducer(state = initialState, action) {
    switch (action.type) {
        case CHOISE_ELEMENT_TIME:
            state.itemTime.map((item, i) => {
                if (i !== action.id) {
                    state.itemTime[i].disable = true;
                    state.itemTime[i].active = false;
                } else {
                    state.itemTime[i].disable = false;
                    state.itemTime[i].active = true;
                }
            });
            return Object.assign({}, state, {
                itemTime: state.itemTime
            });
        break;
        default:
            return state;
    }
}

const ListTimeReducer = {
    listTime: listTimeReducer
};

export default ListTimeReducer;
