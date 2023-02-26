import Axios from 'axios';
const API = 'http://localhost:8000/v1/product';

export class ProductService {
  getAllProduct() {
    return Axios.get(API);
  }
  getProduct10days() {
    return Axios.get(`${API}/10days/prd`);
  }
  getDetail(id) {
    return Axios.get(`${API}/${id}`);
  }
  getProductType(type, limit) {
    return Axios.get(`${API}/products/${type}/${limit}`);
  }

  getProductTypeSamsung(limit) {
    return Axios.get(`${API}/products/Samsung/${limit}`);
  }
}
