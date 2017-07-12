import { CHOISE_ELEMENT } from './actions'

const initialState = {
    item: [
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
        },
        {
            id: 4,
            text: '4text',
            active: false,
            disable: false
        },
        {
            id: 5,
            text: '5text',
            active: false,
            disable: false
        },
        {
            id: 6,
            text: '6text',
            active: false,
            disable: false
        },
        {
            id: 7,
            text: '7text',
            active: false,
            disable: false
        }
    ],
    time: false
};

function listReducer(state = initialState, action) {
    switch (action.type) {
        case CHOISE_ELEMENT:
            state.item.map((item, i) => {
                if (i !== action.id) {
                    state.item[i].disable = true;
                    state.item[i].active = false;
                } else {
                    state.item[i].disable = false;
                    state.item[i].active = true;
                }
            });
            state.time = true;
            return Object.assign({}, state, {
                item: state.item
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
