import axios from 'axios';
import authHeader from './auth-header';

//const API_URL = 'http://localhost:7000/api/';
const API_URL = 'https://healthtrackerrest-production-cb60.up.railway.app/api/';

class CategoriesService {
    
    addCategory(data) {
        this.category = axios.post(API_URL + 'categories', data, { headers: authHeader() });
        return this.category
    }
    
    getAllCategories() {
        this.categories = axios.get(API_URL + 'categories', { headers: authHeader() });
        return this.categories
    }

    getCategoryById(categoryId) {
        this.category = axios.get(API_URL + 'categories/' + categoryId, { headers: authHeader() });
        return this.category
    }

    deleteCategoryById(categoryId) {
        this.category = axios.delete(API_URL + 'categories/' + categoryId, { headers: authHeader() });
        return this.category
    }

    updateCategoryById(categoryId, data) {
        this.category = axios.patch(API_URL + 'categories/' + categoryId, data, { headers: authHeader() });
        return this.category
    }

}

export default new CategoriesService();