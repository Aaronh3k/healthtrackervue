import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class ProfilesService {
    
    getAllProfiles() {
        this.profiles = axios.get(API_URL + 'profiles', { headers: authHeader() });
        return this.profiles
    }

}

export default new ProfilesService();