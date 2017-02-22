import config from '../config.json';
import request from '../request.js';

export let findAll = () => {
  return request({ url: `http://localhost:3000/api/items?subscription_key=${config.subscription_key}` })
    .then(data => data = JSON.parse(data))
};
