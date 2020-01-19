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
                // <Form>
                //     <Form.Group controlId="formBasicEmail">
                //     <Form.Label> Email address </Form.Label>
                //     <Form.Control type="" placeholder="email@website.com" />
                //     <Form.Text className="text-muted"></Form.Text>
                //     </Form.Group>

                //     <Form.Group controlId="formBasicPassword">
                //         <Form.Label>Password</Form.Label>
                //         <Form.Control type="password" placeholder="Password" />
                //     </Form.Group>
                    
                //     <Button variant="primary" type="submit"> Submit </Button>
                // </Form>
                
                //Container for the login screen
               
                <Container> 
                    <Row>
                        <a href="/"><Logo/></a>
                    </Row>
                    <Row>
                        <Col> Email </Col>
                    </Row>
                    
                    <Row>
                        <Email/>
                    </Row>
                    
                    <Row>
                        <Col> Password </Col>
                    </Row> 
                    
                    <Row>
                        <Password/>
                    </Row>

                    <Row>
                        <ButtonToolbar>
                            <Button  variant="primary" size = "lg" style={{marginTop:"2%"}}>Log In</Button>
                        </ButtonToolbar>
                    </Row>
                    
                    <Row>                        
                            <Button  variant="primary" size = "lg" style={{marginTop:"2%"}}>Sign Up</Button>
                    </Row>
                </Container>
                   
            )
        }
}
