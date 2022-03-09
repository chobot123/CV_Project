import React from "react";


const ExpForm = (props) => {
    
    const {jobList} = props;


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
                            
                            {props.description}
                        </form>
                        <button onClick={() => props.deleteExp(job.id)}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </>
    )
}

export default ExpForm;