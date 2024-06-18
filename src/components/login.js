import '../App.css';

import React, { useState } from "react";

const LoginPage = () => {

  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="LoginPage">
      <h1>Login page</h1>
      <div className="loginForm">
          <label>
              Login: <input type="text" placeholder='enter login' onChange={(e) => setLogin(e.target.value)}/>
          </label>
            <br/>
          <label>
              Password: <input type="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Enter</button>
      </div>
    </div>
  );
}

export default LoginPage;
