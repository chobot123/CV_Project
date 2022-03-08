import React from "react";
import Profile from "./components/profile/Profile"
import UserInfo from "./components/user-info/UserInfo";
import './styles/app.css'
import './styles/normalize.css'

const App = () => {
  return (
    <div className="content-wrapper">
        <div className="title-wrapper">
          <span id="page-title">
            CV-Creator
          </span>
        </div>
        <div className="content">
          <Profile />
          <UserInfo />
        </div>
    </div>
  )
}

export default App;
