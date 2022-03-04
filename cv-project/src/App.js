import React from "react";
import UserInfo from "./components/user-info/UserInfo";
import './styles/app.css'
import './styles/normalize.css'

const App = () => {
  return (
      <div className="content">
        <div className="profile">
            {/* <Description />
            <Contact /> */}
        </div>
        <UserInfo />
      </div>
  )
}

export default App;
