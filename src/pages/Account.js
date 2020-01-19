import React, { Component } from 'react'
import Transaction from '../components/Transaction';
import {Container, Row, Col} from 'react-bootstrap';

export default class Account extends Component {
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col xs={3} md={4} style={{borderRight:"5px solid #48C9B0"}}>
                        <Transaction/>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
