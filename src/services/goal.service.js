import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class GoalsService {

    getAllGoals() {
        this.goals = axios.get(API_URL + 'goals', { headers: authHeader() });
        return this.goals
    }

    getGoalById(goalId) {
        this.goal = axios.get(API_URL + 'goals/' + goalId, { headers: authHeader() });
        return this.goal
    }

    updateGoalById(goalId, data) {
        this.goal = axios.patch(API_URL + 'goals/' + goalId, data, { headers: authHeader() });
        return this.goal
    }
}

export default new GoalsService();