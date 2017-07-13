import React from 'react';
import { Link } from 'react-router-dom';
import './error.less';

export default class ErrorPage extends React.Component {
    
    render() {
        return (
            <div className='alert alert-danger page-error'>
                <h3>Страница не найдена</h3>
                <p>Перейти на <Link to='/'>главную</Link></p>
            </div>
        );
    }
    
}
