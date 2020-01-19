import React, { Component } from 'react';
import { FormInput } from "shards-react";



export default class Searchbar extends Component {
	render(){
		return(
			<div>
			  	<FormInput placeholder="Search for a Charity/Organization" />
		  	</div>
	    );
	}
}


