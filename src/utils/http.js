import axios from 'axios';
import TokenStorage from './TokenStorage';

const AUTH_KEY = 'Authorization';
const REFRESH_TOKEN_ENDPOINT = '/auth/token/refresh/';

const options = {
  baseURL: process.env.REACT_APP_API,
};

const instance = axios.create(options);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    // Log in dev
    if (process.env.NODE_ENV !== 'production') {
      console.log('[AXIOS]', 'RESPONSE', JSON.stringify({ error }));
    }
    // Return any error which is not due to authentication
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    // Attempt to refresh access token and re-issue original request
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      TokenStorage.getRefreshToken()
    ) {
      originalRequest._retry = true;
      return instance
        .post(REFRESH_TOKEN_ENDPOINT, {
          refresh_token: TokenStorage.getRefreshToken(),
        })
        .then((response) => {
          if (response.status === 201) {
            TokenStorage.setToken(response.data);
            originalRequest.headers[
              AUTH_KEY
            ] = `Bearer ${TokenStorage.getAccessToken()}`;
            return new Promise((resolve, reject) => {
              axios
                .request({ ...originalRequest, baseURL: undefined })
                .then((response) => resolve(response))
                .catch((error) => reject(error));
            });
          }
        });
    } else {
      return Promise.reject(error);
    }
  },
);

instance.interceptors.request.use(
  (config) => {
    try {
      const token = TokenStorage.getAccessToken();
      if (token) {
        config.headers[AUTH_KEY] = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      // Log in dev
      if (process.env.NODE_ENV !== 'production') {
        console.log('[AXIOS]', 'REQUEST', JSON.stringify({ error }));
      }

      return config;
    }
  },
  (error) => Promise.reject(error),
);

export default instance;
