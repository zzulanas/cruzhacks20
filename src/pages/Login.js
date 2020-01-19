import React, { Component } from 'react'
import Searchbar from '../components/Searchbar';
import logo from '../svg/C4coin.svg'
import Email from './Email';
import Password from './Password';



export default class Login extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        email:
                    </p>
                    <Email/>
                    <br></br>
                    <p>
                        password:
                    </p>
                    <Password/>
                </header>
            </div>
        )
    }
}
