import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-react-newbie.firebaseio.com/'
});

instance.interceptors.request.use(request => {
  console.log(request);
  return request;
});

export default instance;
