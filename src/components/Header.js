import React, { Component } from 'react'
import Logo from './Logo';
import {Navbar, Nav, Col} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
                <>
                <Navbar sticky="top">
                    <Navbar.Brand href="/"><Logo/></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#deets">Charities</Nav.Link>
                        <Nav.Link href="#deets">Account</Nav.Link>
                    </Nav>
                </Navbar>
                </>
        )
    }
}
