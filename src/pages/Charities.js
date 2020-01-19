import React, { Component } from 'react'
import Searchbar from '../components/Searchbar';

export default class Charities extends Component {
    render() {
        return (
            <div className = "Charities">
                    {/* <p>
                        Partnered Charities and Organizations
                    </p> */}
                    <Searchbar/>
            </div>
        )
    }
}
