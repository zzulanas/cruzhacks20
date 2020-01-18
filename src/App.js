import React from 'react';
import logo from './svg/coinz.svg';
import Searchbar from './components/Searchbar.js';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Searchbar/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
