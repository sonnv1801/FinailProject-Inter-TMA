import Axios from 'axios';
const API = 'http://localhost:8000/v1/typeProduct';

export class TypeProduct {
  getAllTypeProduct() {
    return Axios.get(API);
  }
}
