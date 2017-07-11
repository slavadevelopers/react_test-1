import React from 'react';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-light bg-faded">
                    <h1 className="navbar-brand mb-0">HEADER</h1>
                </nav>
            </div>

        );
    }
}
