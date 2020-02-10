import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class ContactUsBody extends Component {

    deleteData = () => {
        axios.delete('http://localhost:8080/contactus/' + this.props.id);
        alert('Delete Successfully');
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <p>{this.props.name} </p>
                <p>{this.props.email} </p>
                <p>{this.props.message} </p>
    
                <NavLink to={"/editcontactus/" + this.props.id}>Edit</NavLink>
                <button onClick={this.deleteData}>Delete</button>
            </div>
        )
    }
}
export default ContactUsBody;
