import React, { Component } from 'react';
import { FormInput } from "shards-react";



export default class Password extends Component {
    constructor(props){
        super(props);
    }
	render(){
		return(
			<div>
			  	<FormInput placeholder="password" />
		  	</div>
	    );
	}
}