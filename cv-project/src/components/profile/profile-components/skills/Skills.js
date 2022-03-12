import React, { Component } from "react";
import uniqid from "uniqid";
import SkillForm from "./skill-form-component";
import "../../../../styles/component-styles/skills.css"

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            skill : {
                desc : 'HTML',
                id: uniqid(),

            },
            skillList : [],
        }
    }

    onChange = (index, e) => {

        this.setState(state => {
            const list = state.skillList.map((skill, i) => {
                if(index === i){
                    return skill[e.target.id] = e.target.value;
                }
                else {
                    return skill;
                }
            })
            return list;
        })
    }

    onSubmit = (e) => {

        e.preventDefault();

        this.setState((state) => ({
            
            skillList : state.skillList.concat(this.state.skill),
            skill : {
                ...state.skill,
                id : uniqid(),
            }
        }))
    }

    deleteSkill = (id, e) => {
        e.preventDefault();

        this.setState({
            skillList : this.state.skillList.filter((skill) => skill.id !== id)
        })
    }

    render () {

        const {skillList} = this.state;

        return (
            <div className="skills">
                <SkillForm skillList = {skillList}
                           onChange = {this.onChange}
                           deleteSkill = {this.deleteSkill}
                />
                <button onClick={this.onSubmit} id="add">
                    Add Skill+
                </button>
            </div>
        )
    }
}

export default Skills;