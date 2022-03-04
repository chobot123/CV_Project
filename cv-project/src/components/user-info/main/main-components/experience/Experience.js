import React, { Component } from "react";
import ExpForm from "./experience-components/experience-component";
import uniqid from "uniqid";

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            job : {
                position : 'Senior Financial Advisor',
                title: {
                    name : 'Wells Fargo Advisors',
                    location : 'Houston, TX', 
                },
                date : {
                    begin  : '2020-09-22',
                    end : '2022-03-04',
                },
                description : {
                    text : 'Deliver financial advice to clients',
                    id : uniqid(),
                },
                descList : [],
                id : uniqid(),
            },
            jobList : [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmitExp = this.onSubmitExp.bind(this);
        this.deleteExp = this.deleteExp.bind(this);
        this.formChange = this.formChange.bind(this);
    }

    handleChange = (index, e) => {
        this.setState((state => {

            const list = state.jobList.map((item, i) => {
                if(index === i){
                    if(e.target.id === 'name'){
                        return item['title'].name = e.target.value;
                    }
                    else if(e.target.id ==='location'){
                        return item['title'].location = e.target.value;
                    }
                    else if(e.target.id === 'begin'){
                        return item['date'].begin = e.target.value;
                    }
                    else if(e.target.id === 'end'){
                        return item['date'].end = e.target.value;
                    }
                    return item[e.target.id] = e.target.value;

                }
                else {
                    return item;
                }
                
            })
            return list;
        }), () => console.log(this.state))
    }

    formChange = (index, e) => {
        this.setState(state => {
            const list = state.job.descList.map((item, i) => {
                if(index === i){
                    return item[e.target.id] = e.target.value;
                }
                else {
                    return item;
                }
            })
            return {
                list,
            }
        })
    }


    onSubmitExp = (e) => {
        
        e.preventDefault();

        this.setState(prevState => ({
            jobList : this.state.jobList.concat(this.state.job),
            job : {
                ...prevState.job,
                id : uniqid(),
            }
        }))
    }

    deleteExp = (id) => {
        this.setState({
            jobList : this.state.jobList.filter((job) => job.id !== id)
        })
    }

    render() {

        const {jobList} = this.state;

        return (
            <div className="experience">
                <ExpForm jobList = {jobList} 
                         handleChange = {this.handleChange}
                         deleteExp = {this.deleteExp}
                         formChange = {this.formChange}
                         />
                <button id="add" onClick={this.onSubmitExp}>
                    Add Experience+
                </button> 
            </div>
        )
    }
}

export default Experience;