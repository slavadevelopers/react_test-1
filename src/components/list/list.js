import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aT } from './actions';

class List extends React.Component {

    static propTypes = {
        list: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    clickOnBtn() {
        this.props.dispatch(aT(this.props.list.list));
    }

    render() {
        return (
            <div>
                <h3>List</h3>
                <button onClick={ this.clickOnBtn.bind(this) }>Click List</button>
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
