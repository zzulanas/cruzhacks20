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
    toggleSize(){
        this.setState({hidden: !this.state.hidden});
    }
	render(){
		return(
			<div>
			  	<FormInput placeholder="password" />
                  <button>Show / Hide</button>
		  	</div>
	    );
	}
}