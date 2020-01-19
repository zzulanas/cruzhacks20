import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link';
import {Button} from 'react-bootstrap'
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Plaid extends Component {
    state = {
        toDashboard: false,
      }
      handleSubmit = (token) => {
        this.setState(() => ({
            toDashboard: true
          }))
      }
    handleOnExit() {
        console.log("oopsy woopsy!");
    }
    render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/account' />
    }
    return (
        <PlaidLink
        style={{borderRadius:"5px", backgroundColor:"#48C9B0", boxShadow: "4.30925px 3.4474px 6.8948px rgba(0, 0, 0, 0.34)"}}
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="489aba9a49ef531ca8b95182f6290f"
        onExit={this.handleOnExit}
        onSuccess={this.handleSubmit}
        >
        
        Open Link and connect your bank!
        </PlaidLink>
    )
    }
}