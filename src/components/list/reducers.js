import { CHOISE_ELEMENT, CHANGE_INPUT_LIST } from './actions'

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
    time: false,
    inputList: false,
    inputListNone: true,
    extend: false
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
            if (action.textElement == '7text') {
                state.inputListNone = false;
            } else {
                state.inputListNone = true;
            }
            if (action.textElement == '1text' || action.textElement == '2text' || action.textElement == '3text') {
                state.extend = true;
            } else {
                state.extend = false;
            }
            if (state.inputList) {
                state.extend = false;
            }
            state.time = true;
            return Object.assign({}, state, {
                item: state.item,
                time: state.time,
                inputListNone: state.inputListNone,
                extend: state.extend
            });
        break;

        case CHANGE_INPUT_LIST:
            state.inputList = !state.inputList;
            if (state.inputList) {
                const filterArray = state.item.filter((item) => {
                    return item.text !== '7text';
                });
                state.extend = false;
                return Object.assign({}, state, {
                    item: filterArray,
                    inputList: state.inputList,
                    extend: state.extend
                });
            }
            state.extend = true;
            return Object.assign({}, state, {
                item: initialState.item,
                inputList: state.inputList,
                extend: state.extend
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
