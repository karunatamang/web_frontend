import React, { Component } from 'react'
import axios from 'axios';

class ContactUsForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        isSendSuccess: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    addContact = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,

        }
        console.log(data);

        axios.post("http://localhost:8080/contactus", data).then((response) => {
            this.setState({
                name: '',
                email: '',
                message: '',
                isSendSuccess: true
            });
        }).catch((err) => console.log(err));

    }

    render() {
        if (this.state.isSendSuccess === true) {
            alert('Send Successfully');
        }
        return (
            <div>
                <form>
                    <h1>Donation Detail</h1>
                    <fieldset>

                        <label for="name">Name:</label>
                        <input type="text" name="name" value={this.state.name}
                            onChange={this.handleChange} required />

                        <label for="email">Email:</label>
                        <input type="email" name="email" value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="message">Message:</label>
                        <input type="text" name="message" value={this.state.message}
                            onChange={this.handleChange} required />

                    </fieldset>
                    <button className="button1" onClick={this.addContact}>Send Message</button>

                </form>

            </div>
        )
    }
}

export default ContactUsForm;
