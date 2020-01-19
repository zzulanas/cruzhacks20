import React, { Component } from 'react'
import Searchbar from '../components/Searchbar';

export default class Charities extends Component {
    render() {
        return (
            <div>
                <div
                	style={{
                		position: 'absolute',top:'10%',left:'50%',
                		transform: 'translate(-50%, -50%)'
                	}}>
                  	Partnered Charities and Organizations
                </div>

                <div
                	style={{
                		position: 'absolute',left:'50%',
                		transform: 'translate(-50%, -50%)'
                	}}>
                	<Searchbar/>
                </div>
                
    		</div>
           	
        )
    }
}
