import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class ActivityService {

    getAllActivities() {
        this.activities = axios.get(API_URL + 'activities', { headers: authHeader() });
        return this.activities
    }

    // getAllActivities() {
    //     this.activities = axios.get(API_URL + 'activities', { headers: authHeader() });
    //     return this.activities
    // }
    
}

export default new ActivityService();