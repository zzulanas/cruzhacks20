import React, { Component } from 'react'
import Logo from './Logo';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Logo/>
                <div className="nav-items">
                    <a className="nav-item" href="about">About</a>
                    <a className="nav-item" href="charities">Charities</a>
                    <a className="nav-item" href="account">Account</a>
                    <a className="nav-item" href="login">Login</a>
                    <a className="nav-item" href="signup">Signup</a>
                </div>
            </div>
        )
    }
}
