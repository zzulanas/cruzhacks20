import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Button} from "shards-react";

export default class Organization extends Component {
    render(props) {
        return (
            <Card style={{ maxWidth: "80%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" , borderRadius: "10px", minWidth:"20%", margin:"10%", backgroundColor:"#2C786C", color:"white"}}>
            <CardBody>
              <Container>
                <Row>
                  <Col>
                  <img style={{maxWidth:"40%"}}src={this.props.image}/>
                  </Col>
                  <Col>
                  <h2><b>{this.props.name}</b></h2>
                  <h3>Total Contributions: $14.33</h3>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        )
    }
}
