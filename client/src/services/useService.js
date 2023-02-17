import Axios from 'axios';
const API = 'https://63ef3e62c59531ccf16b778a.mockapi.io/api/v1/user';

export class UserService {
  getUser() {
    return Axios.get(API);
  }
}
