import React, { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Header />
      <Content />
      </div>
    );
  }
}

export default App;
