


const initialState = {
    item: [
        {
            id: 1,
            text: 'Cards',
            src: 'img/cards.png',
            alt: 'Cards',
            hover: false
        },
        {
            id: 2,
            text: 'PayPal',
            src: 'img/paypal.png',
            alt: 'PayPal',
            hover: false
        },
        {
            id: 3,
            text: 'Qiwi',
            src: 'img/qiwi.png',
            alt: 'Qiwi',
            hover: false
        },
        {
            id: 4,
            text: 'WebMoney',
            src: 'img/webmoney.png',
            alt: 'WebMoney',
            hover: false
        },
        {
            id: 5,
            text: 'Yandex Money',
            src: 'img/yandexmoney.png',
            alt: 'Yandex Money',
            hover: false
        }
    ]
};

function homeReducer(state = initialState, action) {
    return state;
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;