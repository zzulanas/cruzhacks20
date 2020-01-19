import React, { Component } from 'react'
import logo from '../svg/C4coin.svg'
import Email from '../components/Email';
import Password from '../components/Password';
import Logo from '../components/Logo';
import {Container, Row, Col, ButtonToolbar} from 'react-bootstrap' 
import { Button, ButtonGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap' 



export default class Login extends Component {
        render() {
            return (
                <Container> 
                    <Row>
                        <a href="/"><Logo/></a>
                    </Row>
                    <Row>
                        <Col style={{textAlign:"center"}}></Col>
                        <Col style={{textAlign:"center"}}>Email</Col>
                        <Col style={{textAlign:"center"}}></Col>
                    </Row>
                    
                    <Row>
                        <Col style={{textAlign:"center"}}></Col>
                        <Col style={{textAlign:"center"}}><Email/></Col>
                        <Col style={{textAlign:"center"}}></Col>
                    </Row>
                    
                    <Row>
                        <Col style={{textAlign:"center"}}></Col>
                        <Col style={{textAlign:"center"}}>Password</Col>
                        <Col style={{textAlign:"center"}}></Col>
                    </Row> 
                    
                    <Row>
                        <Col style={{textAlign:"center"}}></Col>
                        <Col style={{textAlign:"center"}}><Password/></Col>
                        <Col style={{textAlign:"center"}}></Col>
                    </Row>

                    <Row>
                        <ButtonToolbar>
                            
                            <Col style={{textAlign:"center"}}></Col>
                            <Col style={{textAlign:"center"}}></Col>
                            <Col style={{textAlign:"center"}}></Col>
                            <Button  block variant="primary" size = "lg" style={{marginTop:"2%"}, {marginRight: "-266%"}}>Log In</Button>
                        </ButtonToolbar>
                    </Row>
                    <br>
                    </br>
                    <Row>    
                    <ButtonToolbar>   
                            <Col style={{textAlign:"center"}}></Col>
                            <Col style={{textAlign:"center"}}></Col>
                            <Col style={{textAlign:"center"}}></Col>                
                            <Button  block variant="primary" size = "lg" style={{marginBottom:"7%"}, {marginRight: "-240%"}}>Sign Up</Button>
                    </ButtonToolbar>
                    </Row>
                </Container>
                   
            )
        }
}
