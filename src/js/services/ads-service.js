import config from '../config.json';
import request from '../request.js';

export let findAll = (start = 1, end = 999) => {
  return Promise.resolve([{
    "id": "4ccc37ed-dd89-4f1b-9ead-e53a253cedf0",
    "src": "http://localhost/fountain-web/dist/assets/ads/ad-300x250.png",
    "href": "http://www.google.com",
    "width": 300,
    "height": 250,
    "placement": "home.tile.3"
  },
  {
    "id": "6990fc6e-54eb-4da0-bba9-5fc4d00337d3",
    "src": "http://localhost/fountain-web/dist/assets/ads/ad-728x90.png",
    "href": "http://www.google.com",
    "width": 728,
    "height": 90,
    "placement": "home"
  },
  {
    "id": "b50e89c5-4c90-4879-a008-7164838a7754",
    "src": "http://localhost/fountain-web/dist/assets/ads/ad-970x90.png",
    "href": "http://www.google.com",
    "width": 970,
    "height": 90,
    "placement": "home"
  },
  {
    "id": "26fb7cb9-72ef-4662-a5a7-83f8b1f7430f",
    "src": "http://localhost/fountain-web/dist/assets/ads/ad-970x250.png",
    "href": "http://www.google.com",
    "width": 970,
    "height": 250,
    "placement": "home.footer"
  },
  {
    "id": "d71e9fef-eb62-4771-a8a1-6979e06f6490",
    "src": "http://localhost/fountain-web/dist/assets/ads/ad-468x60.png",
    "href": "http://www.google.com",
    "width": 468,
    "height": 60,
    "placement": "home"
  },
  {
    "id": "f45c490c-8f99-47b2-ba86-9118be6ee2bc",
    "src": "http://localhost/fountain-web/dist/assets/ads/ad-300x100.png",
    "href": "http://www.google.com",
    "width": 300,
    "height": 100,
    "placement": "home"
  }]);
};
