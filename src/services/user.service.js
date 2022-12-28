import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class UserService {
    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getAllUsers() {
        this.users = axios.get(API_URL + 'users', { headers: authHeader() });
        this.activities = axios.get(API_URL + 'activities', { headers: authHeader() });
        this.goals = axios.get(API_URL + 'goals', { headers: authHeader() });
        this.categories = axios.get(API_URL + 'categories', { headers: authHeader() });
        //this.data = {"users":this.users, "activities":this.activities,"goals":this.goals, "categories":this.categories}
        return this.users
    }

    getAllActivities() {
        this.activities = axios.get(API_URL + 'activities', { headers: authHeader() });
        return this.activities
    }


}

export default new UserService();