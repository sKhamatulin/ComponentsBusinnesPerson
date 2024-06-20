import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import Api from '../utils/tokenCheck';

const PrivatRoute = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const api = new Api();

        api.Get('https://server/checkToken')
            .then((data) => {
                console.log('Token validation successful');
                setAuth(true);
            })
            .catch((error) => {
                console.error('Token validation failed:', error);
                setAuth(false);
            });
    }, []);

    if (auth === null) {
        return null;
    }

    return auth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivatRoute;
