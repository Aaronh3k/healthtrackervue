import axios from 'axios';

//const API_URL = 'http://localhost:7000/api/';
const API_URL = 'https://healthtrackerrest-production-cb60.up.railway.app/api/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'register', {
            user_name: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();