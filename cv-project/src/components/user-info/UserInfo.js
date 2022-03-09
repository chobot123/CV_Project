import React from "react";
import Education from "./main-components/education/Education";
import Experience from "./main-components/experience/Experience";
import "../../styles/user-info.css"
import Description from "./main-components/description/Description";


const UserInfo = () => {
    return (
        <div className="user-info">
            <Description />
            <Education />
            <Experience />
        </div>
    );
};

export default UserInfo;