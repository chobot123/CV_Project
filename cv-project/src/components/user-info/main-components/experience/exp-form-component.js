import React from "react";
import DescriptionForm from "./form-desc-component";

const ExpForm = (props) => {
    
    const {jobList} = props;
    console.log(props);

    return (
        <>
            {jobList.map((job, index)=> {
                return (
                    <li key={job.id}>
                        <form className="job">

                            <input 
                                onChange={(e) => props.handleChange(index, e)}
                                value={job.position}
                                type="text" 
                                id="position"
                            />
                            
                            <input 
                                onChange={(e) => props.handleChange(index, e)}
                                value={job.title.name}
                                type="text" 
                                id="name"
                            />

                            <input 
                                onChange={(e) => props.handleChange(index, e)}
                                value={job.title.location}
                                type="text" 
                                id="location"
                            />
                        
                            <input
                                onChange={(e) => props.handleChange(index, e)}
                                value={job.date.begin}
                                type="date" 
                                id="begin"
                            />
                            
                            
                            <input 
                                onChange={(e) => props.handleChange(index, e)}
                                value={job.date.end}
                                type="date" 
                                id="end"
                            />
                            
                            <div className="desc-container">
                                <DescriptionForm descList = {job.descList} 
                                                 formChange = {props.formChange}
                                />
                            </div>
                        </form>
                        <button onClick={() => props.deleteExp(index)}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </>
    )
}

export default ExpForm;