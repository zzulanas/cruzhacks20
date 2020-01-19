import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link';
import {Button} from 'react-bootstrap'

export default class Plaid extends Component {
    handleOnSuccess(token, metadata) {
        console.log(token)
        console.log(metadata)
    }
    handleOnExit() {
        console.log("oopsy woopsy!");
    }
    render() {
    return (
        <PlaidLink
        style={{borderRadius:"5px", backgroundColor:"#48C9B0", boxShadow: "4.30925px 3.4474px 6.8948px rgba(0, 0, 0, 0.34)"}}
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="489aba9a49ef531ca8b95182f6290f"
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}
        >
        
        Open Link and connect your bank!
        </PlaidLink>
    )
    }
}