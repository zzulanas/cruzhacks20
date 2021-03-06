import React from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Charities from './pages/Charities';
import Account from './pages/Account';
import Login from './pages/Login';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

function App() {
  const numbers = [['Amazon',0.89],['Whole Foods',0.35],['Target',0.22],['Barnes & Noble',0.98],['AirBnB',0.14]]
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path='/' render={() => (
              <div className="App">
                <Header/>
                <Home />
              </div>
            )}/>
        <Route exact={true} path='/charities' render={() => (
              <div className="Charities">
                <Header/>
                <Charities />
              </div>
            )}/>
        <Route exact={true} path='/account' render={() => (
              <div className="Account">
                <Header account={true}/>
                <Account numbers={numbers} />
              </div>
            )}/>
        <Route exact={true} path='/login' render={() => (
              <div className="Login">
                <Login />
              </div>
            )}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
