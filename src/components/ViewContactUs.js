import React, { Component } from 'react'
import axios from 'axios';
import ContactUsBody from './ContactUsBody';

class ViewContactUs extends Component {

    state = {
        listData: []
    }

    componentDidMount() {
        axios.get("http://localhost:8080/contactus").then(res => {
            this.setState({ listData: res.data });
        });
    }

    render() {
        const listData123 = this.state.listData.map(contactusList => {
            return <ContactUsBody name={contactusList.name} email={contactusList.email}
                message={contactusList.message} id={contactusList._id} />
        });

        return (
            <div>
                {listData123}
            </div>
        )
    }
}

export default ViewContactUs;
