import React, { Component } from 'react'
import axios from 'axios';

class SingleDonation extends Component {

    state = {
        donation_data: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/donation/" + this.props.match.params.id).then(res => {
            this.setState({ donation_data: res.data });
        });
    }
    render() {
        return (
            <div>
                <p>{this.props.match.params.id}</p>
                <p>Donor Name: {this.state.donation_data.donorname}</p>
                <p>Contact Number: {this.state.donation_data.contactnumber}</p>
                <p>Pick-Up Address: {this.state.donation_data.pickupaddress}</p>
                <p>Pick-Up Time: {this.state.donation_data.pickuptime}</p>
                <p>No of Clothes: {this.state.donation_data.noofcloth}</p>
            </div>
        )
    }
}

export default SingleDonation
