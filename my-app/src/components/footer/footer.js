import React from 'react';
import './footer.css'

export default class Footer extends React.Component {

    static path = '/';

    render() {
        return (
            <div className="footer">
                <nav className="navbar navbar-light bg-faded">
                    <h1 className="navbar-brand mb-0">FOOTER</h1>
                </nav>
            </div>
        );
    }
}
