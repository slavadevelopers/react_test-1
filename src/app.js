import React from 'react';
import { Header } from './components/header/index';

export default class App extends React.Component {

    static path = '/';
    
    render() {
        return (
            <div className='container-fluid'>
                <Header />
                { this.props.main }
            </div>
        );
    }
    
}
