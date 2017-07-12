import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';

export default class App extends React.Component {

    static path = '/';
    
    render() {
        return (
            <div>
                <Header />
                { this.props.main }
                <Footer />
            </div>
        );
    }
    
}
