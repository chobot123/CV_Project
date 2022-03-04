import React from "react";

const EduForm = (props) => {

    const {eduList} = props;

    return (
        <>
            {eduList.map((edu, index) => {
                return (
                    <li key={edu.id}>
                        <form className="edu">

                            <input 
                                placeholder="date-begin"
                                onChange={(e) => props.handleChange(index, e)}
                                value={edu.year.begin}
                                type="date" 
                                id="begin"
                            />
                            
                            <input 
                                placeholder="date-end"
                                onChange={(e) => props.handleChange(index, e)}
                                value={edu.year.end}
                                type="date" 
                                id="end"
                            />
                        
                            <input
                                placeholder="School"
                                onChange={(e) => props.handleChange(index, e)}
                                value={edu.school}
                                type="text" 
                                id="school"
                            />
                            
                            
                            <input 
                                placeholder="major"
                                onChange={(e) => props.handleChange(index, e)}
                                value={edu.major}
                                type="text" 
                                id="major"
                            />
                            
                            <input 
                                placeholder="degree"
                                onChange={(e) => props.handleChange(index, e)}
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