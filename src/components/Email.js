import React, { Component } from 'react';
import { Form } from 'react-bootstrap' 



export default class Email extends Component {
	render(){
		return(
			<Form>
  				<Form.Group controlId="formBasicEmail">
    				<Form.Control type="email" placeholder="Enter email" />
    				<Form.Text className="text-muted"></Form.Text>
  				</Form.Group>
			</Form>
	    );
	}
}