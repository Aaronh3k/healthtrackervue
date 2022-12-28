import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class CategoriesService {
    
    getAllCategories() {
        this.categories = axios.get(API_URL + 'categories', { headers: authHeader() });
        return this.categories
    }

}

export default new CategoriesService();