import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class ActivityService {

    getAllActivities() {
        this.activities = axios.get(API_URL + 'activities', { headers: authHeader() });
        return this.activities
    }

    getAllActivitiesByToken() {
        this.activities = axios.get(API_URL + 'user/activity', { headers: authHeader() });
        return this.activities
    }

    getActivityById(activityId) {
        this.activity = axios.get(API_URL + 'activities/' + activityId, { headers: authHeader() });
        return this.activity
    }

    updateActivityById(activityId, data) {
        this.activity = axios.patch(API_URL + 'activities/' + activityId, data, { headers: authHeader() });
        return this.activity
    }
    
}

export default new ActivityService();