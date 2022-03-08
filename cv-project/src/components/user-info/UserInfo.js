import React from "react";
import Username from "./main-components/username/username";
import Education from "./main-components/education/Education";
import Experience from "./main-components/experience/Experience";
import Skills from "./main-components/skills/Skills";
import "../../styles/user-info.css"


const UserInfo = () => {
    return (
        <div className="user-info">
            <Username />
            <Education />
            <Experience />
            <Skills />
        </div>
    );
};

export default UserInfo;