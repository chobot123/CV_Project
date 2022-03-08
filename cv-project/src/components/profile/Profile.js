import React from "react";
import Description from "./profile-components/Description";
import Contact from "./profile-components/Contact"
import "../../styles/profile.css"

const Profile = () => {
    return (
        <div className="profile">
            <Description />
            <Contact />
        </div>
    )
}

export default Profile;