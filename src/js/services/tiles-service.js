import request from '../request.js';

export let findAll = () => {
  return request({ url: 'http://localhost:3000/api/items' })
    .then(data => data = JSON.parse(data))
};
