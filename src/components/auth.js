import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";


const backendEmulator = (token) => {
    const TOKENS = ["q1w2e3r4t5", "a1s2d3f4g5", "z1x2c3v4b5"]
    return TOKENS.includes(token) ? true : false
}


class TokenChecker {
    constructor(tokenKey) {
        this.tokenKey = tokenKey;
    }
    checkToken() {
        return new Promise((resolve, reject) => {
            const token = this.tokenKey;
            if (backendEmulator(token)) {   
                resolve(true);
            } else {
                reject(new Error('Invalid token'))
            }
        })
    }
}


const PrivatRoute = () => {
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        new TokenChecker("z1x2c3v4b5").checkToken()   // localStorage.getItem(this.tokenKey)
            .then(() => {
                console.log('Auth successful')
                setAuth(true);
            })
            .catch(() => {
                console.log('Auth failed')
                setAuth(false);
            });
    }, []);

    if (auth === null) {
        return null
    }

    return auth ? <Outlet /> : <Navigate to="login" />
};


export default PrivatRoute;
