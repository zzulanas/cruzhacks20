import React, { Component } from 'react';
import { FormInput } from "shards-react";



export default class Searchbar extends Component {
	render(){
		return(
			<div>
			  	<FormInput size="lg" placeholder="Search" />
		  	</div>
	    );
	}
}


