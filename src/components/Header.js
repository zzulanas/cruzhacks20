import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from "shards-react";

export default class Navbar extends Component {
    render() {
        return (
            <Nav fill horizontal="true">
            <NavItem>
              <NavLink active href="#">
                Active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                Disabled Link
              </NavLink>
            </NavItem>
          </Nav>
        )
    }
}
