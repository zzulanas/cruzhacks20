import React, { Component } from 'react'
import Searchbar from '../components/Searchbar';
import logo from '../svg/C4coin.svg'

export default class Home extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
