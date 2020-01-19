import React, { Component } from 'react'
import Logo from './Logo';
import {Navbar, Nav, Col} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
                <>
                <Navbar sticky="top" >
                    <Navbar.Brand href="/"><Logo/></Navbar.Brand>
                    <Nav className="ml-auto colorpills" variant="pills" >
                        <Nav.Link href="about">About</Nav.Link> |
                        <Nav.Link href="charities">Charities</Nav.Link> |
                        <Nav.Link href="account">Account</Nav.Link>
                    </Nav>
                </Navbar>
                </>
        )
    }
}
