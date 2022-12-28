import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class GoalsService {

    getAllGoals() {
        this.goals = axios.get(API_URL + 'goals', { headers: authHeader() });
        return this.goals
    }
}

export default new GoalsService();