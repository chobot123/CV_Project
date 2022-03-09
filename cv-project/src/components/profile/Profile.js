import React from "react";
import Contact from "./profile-components/Contact"
import "../../styles/profile.css"
import Username from "./profile-components/username/Username";
import Skills from "./profile-components/skills/Skills";

const Profile = () => {
    return (
        <div className="profile">
            <Username />
            <Contact />
            <Skills />
        </div>
    )
}

export default Profile;