import React, { Component } from 'react'
import axios from 'axios';

class EditDonationForm extends Component {

    state = {
        donorname: '',
        contactnumber: '',
        pickupaddress: '',
        pickuptime: '',
        noofcloth: '',
        donationData: [],
        updateSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    componentDidMount() {
        axios.get("http://localhost:8080/donation/" + this.props.match.params.id).then(res => {
            this.setState({
                donorname: res.data.donorname,
                contactnumber: res.data.contactnumber,
                pickupaddress: res.data.pickupaddress,
                pickuptime: res.data.pickuptime,
                noofcloth: res.data.noofcloth,
                donationData: res.data
            });
        });
    }

    updateDonation = () => {
        const data = {
            donorname: this.state.donorname,
            contactnumber: this.state.contactnumber,
            pickupaddress: this.state.pickupaddress,
            pickuptime: this.state.pickuptime,
            noofcloth: this.state.noofcloth
        }
        console.log(data);

        axios.put("http://localhost:8080/donation/" + this.props.match.params.id, data).then((response) => {
            this.setState({
                updateSuccess: true
            });
        }).catch((err) => console.log(err));;

    }

    render() {
        if (this.state.updateSuccess === true) {
            alert('Update Succussfully');
            window.location.reload(false);
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

                        <label for="pickupaddress">pickupaddress:</label>
                        <input type="text" name="pickupaddress" value={this.state.pickupaddress}
                            onChange={this.handleChange} required />

                        <label for="pickuptime">pickuptime:</label>
                        <input type="text" name="pickuptime" value={this.state.pickuptime}
                            onChange={this.handleChange} required />

                        <label for="noofcloth">noofcloth:</label>
                        <input type="number" name="noofcloth" value={this.state.noofcloth}
                            onChange={this.handleChange} required />

                    </fieldset>
                    <button className="button1" onClick={this.updateDonation}>Update </button>

                </form>

            </div>
        )
    }
}

export default EditDonationForm;
