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
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmitEdu = this.onSubmitEdu.bind(this);
        this.deleteEdu = this.deleteEdu.bind(this);
    }

    handleChange = (index, e) => {

        this.setState((state => {
            const list = state.eduList.map((item, i) => {

                if(index === i){

                    if(e.target.id === 'begin'){
                        return item['year'].begin = e.target.value;
                    }
                    else if(e.target.id === 'end'){
                        return item['year'].end = e.target.value;
                    }
                    return item[e.target.id] = e.target.value;

                }
                else {
                    return item;
                }
            })
            return {
                list,
            }
        }), () => console.log(this.state.eduList))
    }

    onSubmitEdu = (e) => {

        e.preventDefault();
        
        this.setState(prevState => ({

            eduList : this.state.eduList.concat(this.state.edu),
            edu : {
                ...prevState.edu,
                id : uniqid(),
            }
        }));

    }

    deleteEdu = (id) => {

        this.setState({
            eduList : this.state.eduList.filter((edu) => edu.id !== id),
        })

    }

    render () {

        const {eduList} = this.state;
        return (

            <div className="education">

                <EduForm eduList = {eduList} 
                         deleteEdu = {this.deleteEdu} 
                         handleChange = {this.handleChange}/>

                <button id="add" onClick={this.onSubmitEdu}>
                    Add Education+
                </button>

            </div>
        )
    }
}

export default Education;