import React from "react";

const DescriptionForm = (props) => {
    const {descList} = props;

    return (
        <>
            {descList.map((description, index)=> {
                return (
                    <li key={description.id}>
                        <form>
                            <input 
                                onChange={(e) => props.formChange(index, e)}
                                value={description.text}
                                type="text"
                                id="description"
                            />
                        </form>
                    </li>
                )
            })}
        </>
    )
}

export default DescriptionForm;