import React, { Component } from 'react'
import axios from 'axios';

class EditContactUsForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        contactData: [],
        updateSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    componentDidMount() {
        axios.get("http://localhost:8080/contactus/" + this.props.match.params.id).then(res => {
            this.setState({
                name: res.data.name,
                email: res.data.email,
                message: res.data.message,
                contactData: res.data
            });
        });
    }

    updateDonation = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        console.log(data);

        axios.put("http://localhost:8080/contactus/" + this.props.match.params.id, data).then((response) => {
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

                        <label for="name">Donor Name:</label>
                        <input type="text" name="name" value={this.state.name}
                            onChange={this.handleChange} required />

                        <label for="email">Contact Number:</label>
                        <input type="number" name="email" value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="message">Message:</label>
                        <input type="text" name="message" value={this.state.message}
                            onChange={this.handleChange} required />

                    </fieldset>
                    <button className="button1" onClick={this.updateDonation}>Update </button>

                </form>

            </div>
        )
    }
}

export default EditContactUsForm;
