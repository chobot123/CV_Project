import React from "react";

const SkillForm = (props) => {
    const {skillList} = props;
    
    return (
        <ul>
            {skillList.map((skill, index) => {
                return (
                    <li key={skill.id}>
                        <form className="skill">
                            <input 
                                onChange={(e) => props.onChange(index, e)}
                                id="desc"
                                type="text"
                                value={skill.desc}
                            />
                            <button onClick={(e) => props.deleteSkill(skill.id, e)} id="del">
                                &#xd7;
                            </button>
                        </form>
                    </li>
                )
            })}
        </ul>
    )
}

export default SkillForm;