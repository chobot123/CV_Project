import React, {Component} from "react";
import uniqid from "uniqid";
import EduForm from "./education-components/education-form";
import '../../../../../styles/component-styles/education.css'

class Education extends Component {
    constructor () {
        super();
        this.state = {
            edu: {
                school : 'The University of Texas at San Antonio',
                year : {
                    begin : '2005-09-04',
                    end : '2007-05-19',
                },
                major : 'Marketing Management/Business Administration',
                degree : 'MBA',
                id : uniqid(),
            },
            eduList : [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmitEdu = this.onSubmitEdu.bind(this);
        this.deleteEdu = this.deleteEdu.bind(this);
    }

    handleChange = (e) => {

        const newEdu = this.state.edu;
        (e.target.id === 'begin' || e.target.id === 'end') ?
            newEdu.year[e.target.id] = e.target.value : 
            newEdu[e.target.id] = e.target.value;
    
        this.setState(({
            edu : newEdu,
        }), console.log(this.state));

    }

    showForm = () => {

        const form = document.querySelector('.form');
        if(form.classList.length === 2){
            form.classList.remove('hide');
        }
        
    }


    onSubmitEdu = (e) => {

        e.preventDefault();

        const newEdu = this.state.edu;
        newEdu['id'] = uniqid();

        this.setState(prevState => ({
            eduList : this.state.eduList.concat(this.state.edu),
            edu : {
                ...prevState.edu,
                id : uniqid(),
            }
        }), () => console.log(this.state));

        this.showForm();

    }

    deleteEdu = (id) => {
        this.setState(({
            eduList : this.state.eduList.filter((edu) => edu.id !== id),
        }), () => console.log(this.state))
    }

    render () {

        const {edu, eduList} = this.state;
        return (
            <div className="education">
                <EduForm eduList = {eduList} deleteEdu = {this.deleteEdu} handleChange = {this.handleChange}/>
                <form className="form hide" onSubmit={this.onSubmitEdu}>
                    
                    <input
                        placeholder="School"
                        onChange={this.handleChange}
                        value={edu.school}
                        type="text" 
                        id="school"
                    />
                    
                    <input 
                        placeholder="date-begin"
                        onChange={this.handleChange}
                        value={edu.year.begin}
                        type="date" 
                        id="begin"
                    />
                    
                    <input 
                        placeholder="date-end"
                        onChange={this.handleChange}
                        value={edu.year.end}
                        type="date" 
                        id="end"
                    />
                    
                    <input 
                        placeholder="major"
                        onChange={this.handleChange}
                        value={edu.major}
                        type="text" 
                        id="major"
                    />
                    
                    <input 
                        placeholder="degree"
                        onChange={this.handleChange}
                        value={edu.degree}
                        type="text" 
                        id="degree"
                    />

                    <button type="submit">
                        +
                    </button>

                </form>
                <button id="add" onClick={this.showForm}>
                    Add Education+
                </button>

            </div>
        )
    }
}

export default Education;