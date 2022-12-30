import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:7000/api/';
const API_URL = 'https://healthtrackerrest-production-cb60.up.railway.app/api/';

class UserService {
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getAllUsers() {
        this.users = axios.get(API_URL + 'users', { headers: authHeader() });
        return this.users
    }

    deleteUserById(userId) {
        this.users = axios.delete(API_URL + 'users/' + userId, { headers: authHeader() });
        return this.users
    }

    getUserById(userId) {
        this.users = axios.get(API_URL + 'users/' + userId, { headers: authHeader() });
        return this.users
    }

    updateUserById(userId, data) {
        this.users = axios.patch(API_URL + 'users/' + userId, data, { headers: authHeader() });
        return this.users
    }

    updateUserByToken(data) {
        this.user = axios.patch(API_URL + 'user/', data, { headers: authHeader() });
        return this.user
    }

    getUserByToken() {
        this.user = axios.get(API_URL + 'user/', { headers: authHeader() });
        return this.user
    }
    
}

export default new UserService();