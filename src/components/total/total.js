import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saleChecked } from './actions';

class Total extends React.Component {

    static  propsTypes = {
        total: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    goalTest() {
        alert('goalTest, OK');
    }

    saleChecked() {
        this.props.dispatch(saleChecked(this.props.total.total));
    }

    render() {
        return (
            <div>
                <h2>Итого к оплате за { this.props.timeItem.time }</h2>
                <p>{ this.props.timeItem.costAll } руб. {this.props.total.total ? <span> + 150 руб. =
                    { +this.props.timeItem.costAll + 150 } </span> : null }</p>
                { this.props.vue ? <p>далее { this.props.timeItem.cost } руб. в месяц</p> : null }
                <label><input type="checkbox" checked={ this.props.total.total } onChange={ this.saleChecked.bind(this) } />Добавить подписку на скидку 5%</label>
                <div>
                    <button onClick={ this.goalTest.bind(this) }>Купить</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        total: state.total
    };
}

export default connect(mapStateToProps)(Total);
