import * as qs from 'qs';
const axios = require('axios').default;

// const BASE_URL = 'http://localhost:1337'

const BASE_URL = process.env.VUE_APP_API;

const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      Authorization:
        localStorage.getItem('token') || sessionStorage.getItem('token'),
    },
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export class Api {
  static async get(path = '', params = {}) {
    try {
      let queryParams = params.params ? params.params : params;
      queryParams = qs.stringify(queryParams, {
        addQueryPrefix: true,
        encode: false,
        indices: false,
      });
      // data, status, statusText
      const { data } = await apiInstance.get(
        `${BASE_URL}${path}${queryParams}`,
      );
      return { res: data, err: null };
    } catch (err) {
      return { res: null, err };
    }
  }
}
