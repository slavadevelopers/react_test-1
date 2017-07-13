import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { choiceElement, changeInputList } from './actions';
import { ListTime } from '../../components/list-time/index';
import classnames from 'classnames';
import './list.less';

class List extends React.Component {

    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    choiceElement(event) {
        this.props.dispatch(choiceElement(this.props.list.item, event));
    }

    renderList(item) {
        const classItem = classnames({
            'active': item.active,
            'disable': item.disable
        });
        return (
            <li className={ classItem } key={ item.id } onClick={ this.choiceElement.bind(this) }>{ item.text }</li>
        );
    }

    changeChecked() {
        this.props.dispatch(changeInputList(this.props.list.inputList));
    }

    render() {
        return (
            <div>
                <ul>
                    { this.props.list.item.map(this.renderList.bind(this)) }
                </ul>
                { this.props.list.inputListNone ? <label><input type="checkbox" checked={ this.props.list.inputList }
                    onChange={ this.changeChecked.bind(this) }/>Покупаю подписку в подаро</label> : null }
                { this.props.list.time ? <ListTime extend={ this.props.list.extend } /> : null }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        list: state.list
    };
}

export default connect(mapStateToProps)(List);
