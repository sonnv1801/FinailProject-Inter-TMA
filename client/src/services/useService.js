import Axios from 'axios';
const API = 'http://localhost:8000/v1/auth';
const APIUser = 'http://localhost:8000/v1/user';

export class UserService {
  Login(user) {
    return Axios.post(`${API}/login`, user);
  }
  Register(user) {
    return Axios.post(`${API}/register`, user);
  }
  updateUser(id, item, accessToken) {
    return Axios.put(`${APIUser}/${id}`, item, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
}
