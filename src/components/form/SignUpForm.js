import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormText } from 'reactstrap'

class SignUpForm extends Component {

    state = {
        fullname: '',
        email: '',
        password: '',
        address: '',
        phonenumber: '',
        isRegistered: false
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    signUp = () => {
        const data = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            phonenumber: this.state.phonenumber
        }
        console.log(data);

        axios.post("http://localhost:8080/register", data).then((response) => {
            this.setState({
                fullname: '',
                email: '',
                password: '',
                address: '',
                phonenumber: '',
                isRegistered: true
            });
        }).catch((err) => console.log(err));

    }

    render() {
        if (this.state.isRegistered === true) {
            alert('Successfully Registered');
        }
        return (
            <div>
                <form>
                    <h1>Sign Up</h1>
                    <fieldset>
                        <legend><span class="number">1</span>Your basic info</legend>
                        <label for="name">Name:</label>
                        <input type="text" name="fullname" value={this.state.fullname}
                            onChange={this.handleChange} required />

                        <label for="email">Email:</label>
                        <input type="email" name="email" value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="password">Password:</label>
                        <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange} required />

                        <label for="address">Address:</label>
                        <input type="text" name="address" value={this.state.address}
                            onChange={this.handleChange} required />

                        <label for="phonenumber">Mobile Number:</label>
                        <input type="text" name="phonenumber" value={this.state.phonenumber}
                            onChange={this.handleChange} required />
                    </fieldset>
                    <button className="button1" onClick={this.signUp}>Sign Up</button>
                    <FormText>Already a user? <Link to='/login'>Login here!</Link></FormText>
                </form>

            </div>
        )
    }
}

export default SignUpForm;