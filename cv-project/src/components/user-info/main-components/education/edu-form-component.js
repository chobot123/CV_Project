import React from "react";

const EduForm = (props) => {

    const {eduList} = props;

    return (
        <>
            {eduList.map((edu, index) => {
                return (
                    <li key={edu.id}>
                        <form className="edu">
                            <div className="date-container">
                                <label> Start
                                    <input 
                                        placeholder="date-begin"
                                        onChange={(e) => props.handleChange(index, e)}
                                        value={edu.year.begin}
                                        required
                                        type="date" 
                                        id="begin"
                                    />
                                </label>
                                <label> End
                                    <input 
                                        placeholder="date-end"
                                        onChange={(e) => props.handleChange(index, e)}
                                        value={edu.year.end}
                                        required
                                        type="date" 
                                        id="end"
                                    />
                                </label>
                            </div>
                            <div className="education-container">
                                <div className="edu-wrapper">
                                    <input
                                        placeholder="Your school..."
                                        onChange={(e) => props.handleChange(index, e)}
                                        value={edu.school}
                                        type="text" 
                                        id="school"
                                    />
                                    
                                    
                                    <input 
                                        placeholder="Your major..."
                                        onChange={(e) => props.handleChange(index, e)}
                                        value={edu.major}
                                        type="text" 
                                        id="major"
                                    />
                                    
                                    <input 
                                        placeholder="Your degree..."
                                        onChange={(e) => props.handleChange(index, e)}
                                        value={edu.degree}
                                        type="text" 
                                        id="degree"
                                    />
                                </div>
                                <button id="trash" onClick={() => props.deleteEdu(edu.id)}>&#xd7;</button>
                            </div>

                        </form>
                    </li>
                )
            })}
        </>
    )
}

export default EduForm;