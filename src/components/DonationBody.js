import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class DonationBody extends Component {

    deleteData = () => {
        axios.delete('http://localhost:8080/donation/' + this.props.id);
        alert('Deleted Successfully');
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <p>{this.props.donorname} </p>
                <p>{this.props.contactnumber} </p>
                <p>{this.props.pickupaddress} </p>
                <p>{this.props.pickuptime} </p>
                <p>{this.props.noofcloth} </p>

                <NavLink to={"/editdonation/" + this.props.id}>Edit</NavLink>
                <NavLink to={"/singledonation/" + this.props.id}>View Info</NavLink>
                <button onClick={this.deleteData}>Delete</button>

            </div>
        )
    }
}
export default DonationBody;
