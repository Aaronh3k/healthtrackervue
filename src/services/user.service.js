import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class UserService {
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getAllUsers() {
        this.users = axios.get(API_URL + 'users', { headers: authHeader() });
        return this.users
    }
    
}

export default new UserService();