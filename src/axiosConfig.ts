import axios from 'axios';
import { API_URL } from 'constants';

export const server = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json'
  },
  paramsSerializer: (params) => {
    const searchParams = new URLSearchParams();

    for (const param in params) {
      const val = params[param];
      if (val !== undefined && val !== '') {
        if (Array.isArray(val) ) {
          val.length && searchParams.append(param, val.join(','));
        } else {
          searchParams.append(param, val.toString());
        }
      }
    }
    console.log(searchParams.toString());
    return searchParams.toString();
  },
});
