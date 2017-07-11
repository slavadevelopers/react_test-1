import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
          <div className="d-flex flex-column h-100">
            <Header />
              { this.props.main }
            <Footer />
          </div>
    );
  }
}

export default App;
