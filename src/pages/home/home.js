import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import { List } from '../../components/list/index'
import './styles.less';

class HomePage extends React.Component {
    
    static path = '/';

    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    clickOnBtn() {
        this.props.dispatch(addTodo(this.props.home.give));
    }
    
    render() {
        return (
            <div className="container-fluid">
                <List />

            </div>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        home: state.home  
    };
}

export default connect(mapStateToProps)(HomePage);
