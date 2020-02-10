import React, { Component } from 'react'
import axios from 'axios';
import DonationBody from './DonationBody';

class ViewDonation extends Component {

    state = {
        listData: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/donation").then(res => {
            this.setState({ listData: res.data });
        });
    }

    render() {
        const list = this.state.listData.map(donationList => {
            return <DonationBody donorname={donationList.donorname} contactnumber={donationList.contactnumber}
                pickupaddress={donationList.pickupaddress} pickuptime={donationList.pickuptime}
                noofcloth={donationList.noofcloth} id={donationList._id} />
        });

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default ViewDonation;
