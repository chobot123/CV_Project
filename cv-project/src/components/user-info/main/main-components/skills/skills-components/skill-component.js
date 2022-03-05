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
                        </form>
                    </li>
                )
            })}
        </ul>
    )
}

export default SkillForm;