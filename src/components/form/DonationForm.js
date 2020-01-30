import React, { Component } from 'react'
import axios from 'axios';

class DonationForm extends Component {

    state = {
        donorname: '',
        contactnumber: '',
        pickupaddress: '',
        pickuptime: '',
        noofcloth: '',
        successDonate: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    addDonation = () => {
        const data = {
            donorname: this.state.donorname,
            contactnumber: this.state.contactnumber,
            pickupaddress: this.state.pickupaddress,
            pickuptime: this.state.pickuptime,
            noofcloth: this.state.noofcloth
        }
        console.log(data);

        axios.post("http://localhost:8080/donation", data).then((response) => {
            this.setState({
                donorname: '',
                contactnumber: '',
                pickupaddress: '',
                pickuptime: '',
                noofcloth: '',
                successDonate: true
            });
        }).catch((err) => console.log(err));

    }

    render() {
        if (this.state.successDonate === true) {
            alert('Donation Detail added');
        }
        return (
            <div>
                <form>
                    <h1>Donation Detail</h1>
                    <fieldset>

                        <label for="donorname">Donor Name:</label>
                        <input type="text" name="donorname" value={this.state.donorname}
                            onChange={this.handleChange} required />

                        <label for="contactnumber">Contact Number:</label>
                        <input type="number" name="contactnumber" value={this.state.contactnumber}
                            onChange={this.handleChange} required />

                        <label for="pickupaddress">Pick up Address:</label>
                        <input type="text" name="pickupaddress" value={this.state.pickupaddress}
                            onChange={this.handleChange} required />

                        <label for="pickuptime">Pick up Time:</label>
                        <input type="text" name="pickuptime" value={this.state.pickuptime}
                            onChange={this.handleChange} required />

                        <label for="noofcloth">No of Cloth:</label>
                        <input type="number" name="noofcloth" value={this.state.noofcloth}
                            onChange={this.handleChange} required />

                    </fieldset>
                    <button className="button1" onClick={this.addDonation}>Add Detail</button>

                </form>

            </div>
        )
    }
}

export default DonationForm;
