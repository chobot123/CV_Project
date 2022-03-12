import React, { Component } from "react";
import uniqid from "uniqid";
// import DescriptionForm from "./form-desc-component";


class ExpForm extends Component {

    constructor(){
        super();
        this.state = {
            description : {
                text : 'Advised or counceled high-value clients',
                id : uniqid(),
            }
        }
    }

    addDescription = (index, e) => {

        e.preventDefault();
        console.log(index);
        let list = [...this.props.jobList];
        let job = {...list[index]};
        console.log(job);
        let myDescription = {
            text : this.state.description.text,
            id : uniqid(),
        }
        job.descList = job.descList.concat(myDescription);
        list[index] = job;
        this.props.changeList(list);
    }

    render() {

        return (
            <ul>
                {this.props.jobList.map((job, index)=> {
                    return (
                        <li key={job.id}>
                            <form className="job">

                                <div className="job-date">
                                <label> Start
                                    <input
                                            onChange={(e) => this.props.handleChange(index, e)}
                                            value={job.begin}
                                            type="date" 
                                            id="begin"
                                            required
                                    />
                                </label>
                                <label> End
                                    <input 
                                        onChange={(e) => this.props.handleChange(index, e)}
                                        value={job.end}
                                        type="date" 
                                        id="end"
                                        required
                                    />
                                </label>
                                </div>

                                <div className="job-wrapper">
                                    <div className="job-inputs">
                                        <input 
                                            onChange={(e) => this.props.handleChange(index, e)}
                                            value={job.position}
                                            type="text" 
                                            id="position"
                                            placeholder="Your position..."
                                        />
                                        
                                        <input 
                                            onChange={(e) => this.props.handleChange(index, e)}
                                            value={job.name}
                                            type="text" 
                                            id="name"
                                            placeholder="Job title..."
                                        />
            
                                        <input 
                                            onChange={(e) => this.props.handleChange(index, e)}
                                            value={job.location}
                                            type="text" 
                                            id="location"
                                            placeholder="Job location..."
                                        />
                                        <div className="description-wrapper">
                                            {job.descList.map((description, ind) => {
                                                
                                                return (
                                                    <li key={description.id}>
                                                        <div className="desc-item">
                                                            <input 
                                                                onChange={(e) => this.props.formChange(ind, index, e)}
                                                                value={description.text}
                                                                type="text"
                                                                id="text"
                                                                placeholder="Describe your work..."
                                                            />
                                                            <button id="rem-desc" onClick={(e) => this.props.remDesc(index, description.id, e)}>&#xd7;</button>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                            <button id="add-desc" onClick={(e) => this.addDescription(index, e)}>&#x2b;</button>
                                        </div>
                                    </div>
                                    <button onClick={() => this.props.deleteExp(job.id)}>
                                        &#xd7;
                                    </button>
                                </div>
                            
                            </form>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ExpForm;