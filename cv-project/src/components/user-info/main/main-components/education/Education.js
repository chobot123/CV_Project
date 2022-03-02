import React, {Component} from "react";
import uniqid from "uniqid";

class Education extends Component {
    constructor () {
        super();
        this.state = {
            edu: {
                school : 'The University of Texas at San Antonio',
                year : {
                    begin : '2005-09',
                    end : '2007-05',
                },
                major : 'Marketing Management/Business Administration',
                degree : 'MBA',
                id : uniqid(),
            },
            eduList : [],
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {

        for(const property in this.state.edu){
            if(e.target.id === property){
                this.setState({
                    edu : {
                        [e.target.id] : e.target.value,
                    }
                })
            }
        }
    }

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            eduList : this.state.eduList.concat(this.state.edu),
        })
    }

    render () {

        const {edu} = this.state;
        return (
            <div className="education">
                <form onSubmit={this.onSubmitTask}>
                    <input 
                        onChange={this.handleChange}
                        value={edu.school}
                        type="text" 
                        id="school"
                    />
                </form>
            </div>
        )
    }
}

export default Education;