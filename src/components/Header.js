import React, { Component } from 'react'
import Logo from './Logo';
import {Navbar, Nav, Col} from 'react-bootstrap';

export default class Header extends Component {
    render(props) {
        return (
                <>
                <Navbar sticky="top" className={(this.props.account ? "bottomBorder":"")} bg="light">
                    <Navbar.Brand href="/"><Logo/></Navbar.Brand>
                    <Nav className="ml-auto colorpills" variant="pills" >
                        <Nav.Link href="about" style={{marginTop: "-10px"}}>About</Nav.Link> /
                        <Nav.Link href="charities" style={{marginTop: "-10px"}}>Charities</Nav.Link> /
                        <Nav.Link href="account" style={{marginTop: "-10px"}}>Account</Nav.Link>
                    </Nav>
                </Navbar>
                </>
        )
    }
}
