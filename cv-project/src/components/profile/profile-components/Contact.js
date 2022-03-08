import React, { Component } from "react";
import uniqid from "uniqid";
import "../../../styles/component-styles/contact.css"

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            info : {
                phoneNumber : 2133129999,
                email : 'JohnDoe@email.com',
                linkedIn : 'linkedin.com/in/johndoe',
                website : 'johndoeFA.com',
                uniqid : uniqid(),
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(e.target.id);
        const myState = this.state;
        myState.info[e.target.id] = e.target.value;
        this.setState(myState)
    }

    render () {
        const {info} = this.state;
        return (
            <div className="contact-info">
                <form className="contact-form">
                    <input 
                        onChange={this.handleChange}
                        input="number"
                        value={info.phoneNumber}
                        id="phoneNumber"
                        placeholder="Phone Number"
                    />
                    <input 
                        onChange={this.handleChange}
                        input="email"
                        value={info.email}
                        id="email"
                        placeholder="Email"
                    />
                    <input 
                        onChange={this.handleChange}
                        input="text"
                        value={info.linkedIn}
                        id="linkedIn"
                        placeholder="Linked In"
                    />
                    <input 
                        onChange={this.handleChange}
                        input="text"
                        value={info.website}
                        id="website"
                        placeholder="Website"
                    />
                </form>
            </div>
        )
    }
}

export default Contact;