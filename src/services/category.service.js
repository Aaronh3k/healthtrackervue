import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:7000/api/';

class CategoriesService {
    
    getAllCategories() {
        this.categories = axios.get(API_URL + 'categories', { headers: authHeader() });
        return this.categories
    }

    getCategoryById(categoryId) {
        this.category = axios.get(API_URL + 'categories/' + categoryId, { headers: authHeader() });
        return this.category
    }

    updateCategoryById(categoryId, data) {
        this.category = axios.patch(API_URL + 'categories/' + categoryId, data, { headers: authHeader() });
        return this.category
    }

}

export default new CategoriesService();