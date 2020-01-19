import React, { Component } from 'react'
import Logo from '../components/logo';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Logo/>
                <div className="nav-items">
                    <a className="nav-item" href="about">About</a>
                    <a className="nav-item" href="charities ">Charities</a>
                    <a className="nav-item" href="charities ">Account</a>
                    <a className="nav-item" href="charities ">Login</a>
                    <a className="nav-item" href="charities ">Signup</a>
                </div>
            </div>
        )
    }
}
