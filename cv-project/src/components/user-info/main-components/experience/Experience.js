import React, { Component } from "react";
import ExpForm from "./exp-form-component";
// import DescriptionForm from "./form-desc-component";
import uniqid from "uniqid";
import "../../../../styles/component-styles/experience.css"

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            job : {
                position : 'Senior Financial Advisor',
                name : 'Wells Fargo Advisors',
                location : 'Houston, TX', 
                begin  : '2020-09-22',
                end : '2022-03-04',
                id : uniqid(), 
                descList : [],           
            },
            jobList : [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmitExp = this.onSubmitExp.bind(this);
        this.deleteExp = this.deleteExp.bind(this);
        this.changeList = this.changeList.bind(this);
        this.formChange = this.formChange.bind(this);
        this.remDesc = this.remDesc.bind(this);
    }

    handleChange = (index, e) => {

        this.setState(state => {

            const list = state.jobList.map((item, i) => {
                if(index === i){
                    return item[e.target.id] = e.target.value;
                }
                else {
                    return item;
                }
            })
            return list;
        })
    }

    onSubmitExp = (e) => {
        
        e.preventDefault();

        this.setState(((prevState) => ({
            
            jobList : prevState.jobList.concat(this.state.job),
            job : {
                ...prevState.job,
                id : uniqid(),
            }
        })), () => console.log(this.state))
    }

    deleteExp = (id) => {
        console.log(id);
        this.setState(({
            jobList : this.state.jobList.filter((job) => job.id !== id)
        }))
    }

    changeList = (list) => {
        this.setState(({
            jobList : list,
        }), () => console.log(this.state))
    }

    formChange = (descIndex, jobIndex, e) => {
        e.preventDefault();

        this.setState(state => {
            let list = state.jobList;
            let job = list[jobIndex];

            const myDesc = job.descList.map((description, i) => {
                if(descIndex === i){
                    return description.text = e.target.value;
                }
                else return description;
            })
            return myDesc;
        })
    }

    remDesc = (jobIndex, descID, e) => {
        e.preventDefault();

        let list = this.state.jobList;
        let job = list[jobIndex];
        job.descList = job.descList.filter((desc) => desc.id !== descID);
        this.setState({list})
    }

    render() {

        const {jobList} = this.state;

        return (
            <div className="experience">
                <ExpForm jobList = {jobList} 
                         handleChange = {this.handleChange}
                         deleteExp = {this.deleteExp}
                         addDescription = {this.addDescription}
                         changeList = {this.changeList}
                         formChange = {this.formChange}
                         remDesc = {this.remDesc}
                />
                <button id="add" onClick={this.onSubmitExp}>
                    Add Experience
                </button> 
            </div>
        )
    }
}

export default Experience;