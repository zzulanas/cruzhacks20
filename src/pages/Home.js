import React, { Component } from 'react'
import home from '../svg/home_design.svg';
import Plaid from '../components/Plaid';
import { Container, Col, Row, Button } from 'react-bootstrap';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Container>

                    <Row >
                        <Col>
                            <img src={home} alt="hands holding coins" className="small"/>
                        </Col>
                        <Col>
                        <h1> <b>Change4Change</b> </h1>
                        <h2>Be the change you want to see in the world!</h2>
                        <h2>...or you could give a little bit instead</h2>
                        <Button block variant = "primary" className="homebutton" href="login">Log in</Button>
                        <Plaid/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
