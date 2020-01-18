import React from 'react';
import logo from './svg/coinz.svg';
import Searchbar from './components/Searchbar.js';
import './App.css';
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
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
  );
}

export default App;
