import React, { Component } from "react";
import uniqid from "uniqid";
import '../../../../styles/component-styles/username.css'

class Username extends Component {
    constructor() {
        super();
        
        this.state = {
            user : {
                name : 'John Doe',
                title : 'Software Engineer',
                id : uniqid(),
            }
        }

        this.handleName = this.handleName.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
    }

    handleName = (e) => {

        this.setState(prevState => {
            return {
                name : prevState.user.name = e.target.value,
            }
        })
    }

    handleTitle = (e) => {

        this.setState(prevState => {
            return {
                title : prevState.user.title = e.target.value,
            }
        })
    }
    
    render () {

        const {user} = this.state;

        return (
            <div>
                <form className = "userHeader">
                    <input
                         onChange = {this.handleName}
                         value = {user.name}
                         input = "text"
                         id = "name"
                         className = "input"
                    />
                    <input
                         onChange = {this.handleTitle}
                         value = {user.title}
                         input = "text"
                         id = "title"
                         className = "input"
                    />
                </form>
            </div>
        )
    }
}

export default Username;