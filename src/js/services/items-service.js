import config from '../config.json';
import request from '../request.js';

export let findAll = (start = 1, end = 999) => {
  return request({ url: `http://localhost:3000/api/items?subscription_key=${config.subscription_key}&start=${start}&end=${end}` })
    .then(data => data = JSON.parse(data))
};
