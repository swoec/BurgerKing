import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5969f.firebaseio.com/'
});

export default instance;
