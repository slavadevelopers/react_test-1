import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { choiceElementTime } from './actions';

class ListTime extends React.Component {

    static propTypes = {
        listTime: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    choiceElementTime(event) {
        this.props.dispatch(choiceElementTime(this.props.listTime.itemTime, event));
    }

    renderListTime(item) {
        const classItem = classnames({
            'active': item.active,
            'disable': item.disable
        });
        return (
            <li className={ classItem } key={ item.id } onClick={ this.choiceElementTime.bind(this) }>{ item.text }</li>
        );
    }

    render() {
        console.log('time', this.props.listTime);
        return (
            <div>
                <ul>
                    { this.props.listTime.itemTime.map(this.renderListTime.bind(this)) }
                </ul>
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
