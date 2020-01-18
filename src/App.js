import React from 'react';
import Home from './pages/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>

    </BrowserRouter>
  );
}

export default App;
