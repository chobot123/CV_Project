import React from "react";
import Education from "./main-components/education/Education";
import Experience from "./main-components/experience/Experience";
import "../../styles/user-info.css"
import Description from "./main-components/description/Description";


const UserInfo = () => {
    return (
        <div className="user-info">
            <Description />
            <h3 id="exp-header">Experience</h3>
            <Experience />
            <h3 id="edu-header">Education</h3>
            <Education />
        </div>
    );
};

export default UserInfo;