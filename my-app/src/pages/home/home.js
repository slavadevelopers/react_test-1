import React from 'react';
import List from './list'
import './home.css';

export default class Home extends React.Component {

    static path = '/';

    constructor(props) {
        super(props);
        this.state = {
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
    }

    render() {
        return (
            <div className="align-self-stretch home">
                <div className="container pt-5">
                    <List item={ this.state.item } />
                </div>
            </div>
        );
    }
}
