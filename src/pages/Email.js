import React, { Component } from 'react';
import { FormInput } from "shards-react";



export default class Email extends Component {
	render(){
		return(
			<div>
			  	<FormInput placeholder="user@email.com" />
		  	</div>
	    );
	}
}