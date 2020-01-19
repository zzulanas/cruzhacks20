import React, { Component } from 'react'
import {Card,CardHeader,CardTitle,CardImg,CardBody,CardFooter,Button} from "shards-react";

export default class Transaction extends Component {
    render() {
        return (
            <Card style={{ maxWidth: "30%", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" , borderRadius: "10px", minWidth:"20%"}}>
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button>Read more &rarr;</Button>
            </CardBody>
          </Card>
        )
    }
}
