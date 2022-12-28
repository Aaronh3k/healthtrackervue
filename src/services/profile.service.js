import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class ProfilesService {
    
    getAllProfiles() {
        this.profiles = axios.get(API_URL + 'profiles', { headers: authHeader() });
        return this.profiles
    }

    getProfileByUserId(userId) {
        this.profile = axios.get(API_URL + 'users/' + userId + '/userprofile', { headers: authHeader() });
        return this.profile
    }

    updateProfileById(profileId, data){
        this.profile = axios.patch(API_URL + 'profile/' + profileId, data, { headers: authHeader() });
        return this.profile
    }

}

export default new ProfilesService();