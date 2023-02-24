import Axios from 'axios';
const API = 'http://localhost:8000/v1/banner';

export class UserService {
  getAllBaner() {
    return Axios.get(API);
  }
}
