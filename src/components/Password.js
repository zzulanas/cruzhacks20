import React, { Component } from 'react';
import { FormInput } from "shards-react";
import { Form } from 'react-bootstrap' 


export default class Password extends Component {
    render(){
        	return(
        		<Form>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            )
    }
}
    
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         hidden: true
    //     };
    //     this.toggleShow = this.toggleShow.bind(this)
    // }
    // toggleShow(){
    //     this.setState({hidden: !this.state.hidden});
    // }
	// render(){
	// 	return(
	// 		<div>
	// 		  	<input
    //               type={this.state.hidden ? "password" : "text"}
    //             />
    //             <button onClick={this.toggleShow}> Show / Hide </button>
	// 	  	</div>
	//     );
	// }
//}