import Axios from 'axios';
const API = 'http://localhost:8000/v1/comment';

export class CommentProduct {
  getCmt(item) {
    return Axios.get(API, item);
  }
  createCmt(item, accessToken) {
    return Axios.post(API, item, {
      headers: { token: `vanson ${accessToken}` },
    });
  }
}
