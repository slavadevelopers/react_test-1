import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';

export default class App extends React.Component {

    static path = '/';
    
    render() {
        return (
            <div className="app d-flex flex-column h-100">
                <Header />
                { this.props.main }
                <Footer />
            </div>
        );
    }
    
}
