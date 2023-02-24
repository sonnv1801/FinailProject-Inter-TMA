import Axios from 'axios';
const API = 'http://localhost:8000/v1/product';

export class ProductService {
  getAllProduct() {
    return Axios.get(API);
  }
}
