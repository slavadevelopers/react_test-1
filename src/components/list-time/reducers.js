import {
    CHOISE_ELEMENT_TIME,
    CHANGE_LIST_TIME
} from './actions'

const initialState = {
    itemTime: [
        {
            id: 1,
            text: '1text',
            active: false,
            disable: false,
            time: '2 года',
            cost: '120',
            costAll: '2800'
        },
        {
            id: 2,
            text: '2text',
            active: false,
            disable: false,
            time: '1 год',
            cost: '125',
            costAll: '1500'
        },
        {
            id: 3,
            text: '3text',
            active: false,
            disable: false,
            time: '6 месяцев',
            cost: '130',
            costAll: '780'
        }
    ],
    textElement: [
            {
                text: '',
                time: '',
                cost: '',
                costAll: ''
            }
        ],
    total: false,
    inputListTime: false,
    vue: true
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
            state.total = true;
            state.textElement = state.itemTime.filter((item) => {
                if(item.text === action.textElement) {
                    return true;
                }
            });
            return Object.assign({}, state, {
                itemTime: state.itemTime,
                textElement: state.textElement,
                total: state.total
            });
        break;

        case CHANGE_LIST_TIME:
            state.inputListTime = !state.inputListTime

            return Object.assign({}, state, {
                inputListTime: state.inputListTime
            })
        break;

        default:
            return state;
    }
}

const ListTimeReducer = {
    listTime: listTimeReducer
};

export default ListTimeReducer;
