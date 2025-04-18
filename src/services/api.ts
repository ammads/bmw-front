import axios from 'axios';

const API_URL = 'http://localhost:1337';
const API_TOKEN = 'aecf91675f0473597d868609838677befcc680475dd6409832c3c98c0919e3860b54df99af8bf74eb6134a0e4a20a250b695059a389f7656e52723156b81d95c8f1d74ce8c2f2eec58d2b9e1280c600a3ac169add5e5cd9588e6130f4bf2ba77f2c05577b49415bb684ec61330a2506a1aec8b0aff065f6419f082398f19f80a';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export default api;