import React from "react";
import Education from "./main-components/education/Education";
import Experience from "./main-components/experience/Experience";
import Skills from "./main-components/skills/Skills";

const Main = () => {
    return (
        <div className="main">
            <Education />
            <Experience />
            <Skills />
        </div>
    )
}

export default Main;