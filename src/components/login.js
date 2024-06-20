import '../App.css';

import React, { useState } from "react";
import Api from '../utils/tokenCheck';

const LoginPage = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    

    const handleLogin = () => {

      if (!login || !password) {
          setShowErrorMessage(true);
          return;
      }
        const api = new Api();
        const params = {
            login: login,
            password: password
        };

    api.Post('https://server/login', params)
        .then((data) => {
            sessionStorage.setItem('token', data.token);
            window.location.href = '/';
        })
        .catch((error) => {
            console.error('Login failed:', error);
        });
    };

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
          {showErrorMessage && <p>Please enter login and password</p>}
          <button type="submit" onClick={handleLogin}>Enter</button>
      </div>
      </div>
    );
}

export default LoginPage;
