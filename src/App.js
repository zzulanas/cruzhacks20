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
                <Header/>
                <Account />
              </div>
            )}/>
        <Route exact={true} path='/login' render={() => (
              <div className="Login">
                <Login />
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
