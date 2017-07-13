import React from 'react';
import { Link } from 'react-router-dom';
import './header.less'

export default class Header extends React.Component {
    
    render() {
        return (
            <nav className="navbar navbar-toggleable navbar-light bg-faded page-header">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to={'/'}>Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to={'/f'}>Error Page</Link>
                    </div>
                </div>
            </nav>
        );
    }
    
}
