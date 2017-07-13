import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { choiceElementTime, changeListTime, validateChecked } from './actions';
import { Total } from '../total/index';
import './listitem.less';

class ListTime extends React.Component {

    static propTypes = {
        listTime: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        extend: PropTypes.bool.isRequired
    };

    choiceElementTime(event) {
        this.props.dispatch(choiceElementTime(this.props.listTime.itemTime, event));
    }

    renderListTime(item) {
        const classItem = classnames('list-item', {
            'active': item.active,
            'disable': item.disable
        });
        return (
            <li className={ classItem } key={ item.id } onClick={ this.choiceElementTime.bind(this) }>{ item.text }</li>
        );
    }

    changeListTime() {
        this.props.dispatch(changeListTime(this.props.listTime.inputListTime));
    }

    render() {
        return (
            <div>
                <h2>На какой срок</h2>
                <ul className="list">
                    { this.props.listTime.itemTime.map(this.renderListTime.bind(this)) }
                </ul>
                { this.props.extend ? <label><input type="checkbox" checked={ this.props.listTime.inputListTime }
                    onChange={ this.changeListTime.bind(this) } />Продливать подписку автоматически</label> : null }
                { this.props.listTime.total ? <Total vue={ this.props.listTime.inputListTime }
                                                     timeItem={ this.props.listTime.textElement[0] }/> : null }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listTime: state.listTime
    };
}

export default connect(mapStateToProps)(ListTime);
