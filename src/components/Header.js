import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <h1>Welcome to Cloth Bank</h1>
                <div>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Register</NavLink>
                    <NavLink to="/adddonation">Add Donation</NavLink>
                    <NavLink to="/viewdonation">View Donation</NavLink>
                    <NavLink to="/addcontactus">Contact Us</NavLink>
                    <NavLink to="/viewcontactus">View Contact US</NavLink>
                </div>
            </div>
        )
    }
}
