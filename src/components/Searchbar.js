import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
           		<input type="text" className="input" placeholder="Search..." />
    			<ul>
    			...
    			</ul>
                <div className="logo"></div>
                <div classname="menu-items"></div>
            </div>
        )
    }
}
