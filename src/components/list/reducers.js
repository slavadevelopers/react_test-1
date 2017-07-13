import { CHOISE_ELEMENT, CHANGE_INPUT_LIST } from './actions'

const initialState = {
    item: [
        {
            id: 1,
            text: 'visa',
            active: false,
            disable: false,
            src: ''
        },
        {
            id: 2,
            text: 'yandex',
            active: false,
            disable: false,
            src: ''
        },
        {
            id: 3,
            text: 'paypal',
            active: false,
            disable: false,
            src: ''
        },
        {
            id: 4,
            text: 'webmoney',
            active: false,
            disable: false,
            src: ''
        },
        {
            id: 5,
            text: 'sms',
            active: false,
            disable: false,
            src: 'SMS'
        },
        {
            id: 6,
            text: 'qiwi',
            active: false,
            disable: false,
            src: ''
        },
        {
            id: 7,
            text: 'gift',
            active: false,
            disable: false,
            src: 'Подарочный код'
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
            if (action.textElement == 'gift') {
                state.inputListNone = false;
            } else {
                state.inputListNone = true;
            }
            if (action.textElement == 'yandex' || action.textElement == 'paypal' || action.textElement == 'sms') {
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
                    return item.text !== 'gift';
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
