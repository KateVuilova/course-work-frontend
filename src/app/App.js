import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemList from '../components/molecules/ItemList';
import Navigation from '../components/molecules/Navigation';
import './App.css';
import { list } from '../components/molecules/ItemList/testData';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navigation />
          <ItemList list={list} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
