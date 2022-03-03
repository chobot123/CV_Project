import React from "react";

const EduForm = (props) => {

    const {eduList} = props;

    return (
        <>
            {eduList.map((edu) => {
                return (
                    <li key={edu.id}>
                        <form className="edu">
                        
                            <input
                                placeholder="School"
                                onChange={props.handleChange}
                                value={edu.school}
                                type="text" 
                                id="school"
                            />
                            
                            <input 
                                placeholder="date-begin"
                                onChange={props.handleChange}
                                value={edu.year.begin}
                                type="date" 
                                id="begin"
                            />
                            
                            <input 
                                placeholder="date-end"
                                onChange={props.handleChange}
                                value={edu.year.end}
                                type="date" 
                                id="end"
                            />
                            
                            <input 
                                placeholder="major"
                                onChange={props.handleChange}
                                value={edu.major}
                                type="text" 
                                id="major"
                            />
                            
                            <input 
                                placeholder="degree"
                                onChange={props.handleChange}
                                value={edu.degree}
                                type="text" 
                                id="degree"
                            />
                            <button onClick={() => props.deleteEdu(edu.id)}>Delete</button>
                        </form>
                    </li>
                )
            })}
        </>
    )
}

export default EduForm;