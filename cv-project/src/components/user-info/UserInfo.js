import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const UserInfo = () => {
    return (
        <div className="user-info">
            <Header />
            <Main />
            {/* <Footer /> */}
        </div>
    );
};

export default UserInfo;