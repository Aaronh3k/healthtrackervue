import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class GoalsService {
    
    addGoal(data){
        this.goal = axios.post(API_URL + 'goals', data, { headers: authHeader() });
        return this.goal
    }

    getAllGoals() {
        this.goals = axios.get(API_URL + 'goals', { headers: authHeader() });
        return this.goals
    }

    getGoalById(goalId) {
        this.goal = axios.get(API_URL + 'goals/' + goalId, { headers: authHeader() });
        return this.goal
    }

    deleteGoalById(goalId) {
        this.goal = axios.delete(API_URL + 'goals/' + goalId, { headers: authHeader() });
        return this.goal
    }

    updateGoalById(goalId, data) {
        this.goal = axios.patch(API_URL + 'goals/' + goalId, data, { headers: authHeader() });
        return this.goal
    }

    getAllGoalsByToken() {
        this.goals = axios.get(API_URL + 'user/goal', { headers: authHeader() });
        return this.goals
    }
}

export default new GoalsService();