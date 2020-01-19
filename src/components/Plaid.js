import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link';

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
        clientName="Your app name"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="489aba9a49ef531ca8b95182f6290f"
        onExit={this.handleOnExit}
        onSuccess={this.handleOnSuccess}>
        
        Open Link and connect your bank!
        </PlaidLink>
    )
    }
}