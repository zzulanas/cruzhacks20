import React, { Component } from 'react'
import Transaction from '../components/Transaction';
import Organization from '../components/Organization';
import Logo from '../svg/index 1.svg'
import redcross from '../svg/redcross.jpg';
import {Container, Row, Col} from 'react-bootstrap';
export default class Account extends Component {
    
    render(props) {
        return (
            <div>
                
                <div id="left" style={{borderRight:"5px solid #48C9B0", marginTop:"8%"}}>
                <h2 style={{fontWeight:800, textAlign:"center"}} >Recent Donations</h2>
                    {this.props.numbers.map((company, number)=> (
                        <Transaction compName={company[0]} amount={company[1]}/>
                    ))}
                </div>
                <div id="right" style={{marginTop:"8%"}}>
                <h2 style={{fontWeight:800, textAlign:"center"}} >Your Organizations</h2>
                    <Organization image={Logo} name="The Nature Conservancy"/>
                    <Organization image={redcross} name="American Red Cross"/>
                </div>
            </div>
        )
    }
}
