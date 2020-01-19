import React, { Component } from 'react'
import Searchbar from '../components/Searchbar';

export default class Charities extends Component {
    render() {
        return (
            <div>
				<header className = "Charities">
                    <p>
                    	<center>Partnered Charities and Organizations</center>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    ></a>
                    <Searchbar/>
                </header>
            </div>
        )
    }
}
