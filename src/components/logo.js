import React, { Component } from 'react'
import logo from '../svg/C4coin.svg';

export default class Logo extends Component {

    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="logo"></img>
            </div>
        )
    }
}
