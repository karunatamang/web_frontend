import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormText } from 'reactstrap'

class Loginform extends Component {

    state = {
        
        email: '',
        password: '',
        isRegistered: false
    }


    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }


    signUp = () => {
        const data = {
           
            email: this.state.email,
            password: this.state.password
        }
        console.log(data);

        axios.post("http://localhost:8080/register", data).then((response) => {
            this.setState({
                
                email: '',
                password: '',
                
                isRegistered: true
            });
        }).catch((err) => console.log(err));

    }

    render() {
        if (this.state.isRegistered === true) {
            alert('Successfully Login');
        }
        return (
            <div>
                <form>
                    <h1>Login In</h1>
                    <fieldset>
                        <legend><span class="number">1</span>Your basic info</legend>
                      

                        <label for="email">Email:</label>
                        <input type="email" name="email" value={this.state.email}
                            onChange={this.handleChange} required />

                        <label for="password">Password:</label>
                        <input type="password" name="password" value={this.state.password}
                            onChange={this.handleChange} required />

                
                    </fieldset>
                    <button className="button1" onClick={this.signUp}>Sign Up</button>
                    <FormText>Already a user? <Link to='/login'>Login here!</Link></FormText>
                </form>

            </div>
        )
    }
}

export default Loginform;