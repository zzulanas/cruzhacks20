import React, { Component } from 'react'
import Transaction from '../components/Transaction';
import {Container, Row, Col} from 'react-bootstrap';
import Plaid from '../components/Plaid';



export default class Account extends Component {
    
    render() {
        return (
            <div>
                <div id="left" style={{borderRight:"5px solid #48C9B0", marginTop:"7%"}}>
                    <Transaction compName="Amazon" amount="$0.42"/>
                    <Transaction compName="Target" amount="$0.96"/>
                </div>
                <div id="right">
                <Transaction/>
                <Transaction/>
                <Plaid/>
                </div>
            </div>
        )
    }
}
