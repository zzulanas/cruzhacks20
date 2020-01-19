import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Button} from "shards-react";

export default class Transaction extends Component {
    render(props) {
        return (
            <Card style={{ maxWidth: "80%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" , borderRadius: "10px", minWidth:"20%", margin:"10%", backgroundColor:"#FFC300"}}>
            <CardBody>
              <CardTitle>Transaction</CardTitle>
              <Container>
                <Row>
                  <Col>
                  {this.props.compName}
                  <br/>
                  </Col>
                  <Col>
                  {this.props.amount}
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        )
    }
}
