import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";

const TOKEN = "q1w2e3r4t5"

class TokenChecker {
    constructor(tokenKey) {
        this.tokenKey = tokenKey;
    }
    checkToken() {
        return new Promise((resolve, reject) => {
            const token = this.tokenKey;
            if (token === TOKEN) {   // localStorage.getItem(this.tokenKey)
                resolve(true);
            } else {
                reject(new Error('Invalid token'))
            }
        });
    }
}

const PrivatRoute = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        new TokenChecker("q1w2e3r4t5").checkToken()
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