import axios from 'axios';


class Api {

    Get = (url) => {
        return axios.get(url, {
            headers: {
                token: sessionStorage.getItem('token')
            }
        }).then((response) => {
            if (response.status === 403) {
                sessionStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                return Promise.resolve(response.data);
            }
        }).catch((error) => {
            console.error('Error:', error);
            sessionStorage.removeItem('token');
            window.location.href = '/login';
        });
    }

    Post = (url, params) => {
        return axios.post(url, params, {
            headers: {
                token: sessionStorage.getItem('token')
            }
        }).then((response) => {
            if (response.status === 403) {
                sessionStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                return Promise.resolve(response.data);
            }
        }).catch((error) => {
            console.error('Error:', error);
            sessionStorage.removeItem('token');
            window.location.href = '/login';
        });
    }
}

export default Api;