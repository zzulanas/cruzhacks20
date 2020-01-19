import React, { Component } from 'react';
import { FormInput } from "shards-react";



export default class Password extends Component {
    constructor(props){
        super(props);
        this.state = {
            hidden: true
        };
        this.toggleShow = this.toggleShow.bind(this)
    }
    toggleShow(){
        this.setState({hidden: !this.state.hidden});
    }
	render(){
		return(
			<div>
			  	<input
                  type={this.state.hidden ? "password" : "text"}
                />
                <button onClick={this.toggleShow}> Show / Hide </button>
		  	</div>
	    );
	}
}