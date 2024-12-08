import React, { useState } from 'react'
import './Login.css'
import { FaUserAlt, FaLock,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Testi = () => {

  const [action, setAction] = useState("Login");
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <FaUserAlt alt="Icon" className="icon"/>
            <input type="Text" placeholder="User name" />
          </div>
        )}
        <div className="input">
           < MdEmail alt="Icon" className="icon" />
           <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <FaLock alt="Icon" className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          Lost Password?<span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  
}
export default Testi;