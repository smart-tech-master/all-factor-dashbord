import jwtDecode from 'jwt-decode';

export default class TokenStorage {
  static accessTokenKey = 'access_token';
  static refreshTokenKey = 'refresh_token';

  static clearToken() {
    localStorage.removeItem(TokenStorage.accessTokenKey);
    localStorage.removeItem(TokenStorage.refreshTokenKey);
  }

  static getAccessToken() {
    return localStorage.getItem(TokenStorage.accessTokenKey);
  }

  static getRefreshToken() {
    return localStorage.getItem(TokenStorage.refreshTokenKey);
  }

  static isAuthenticated() {
    const accessToken = localStorage.getItem(TokenStorage.accessTokenKey);
    const refreshToken = localStorage.getItem(TokenStorage.refreshTokenKey);
    const validToken = (token) => {
      if (!token) return false;
      try {
        const jwtExp = jwtDecode(token).exp;
        const expiryDate = new Date(0);
        expiryDate.setUTCSeconds(jwtExp);

        return new Date() < expiryDate;
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.log(error);
        }
        TokenStorage.clearToken();
        return false;
      }
    };

    return validToken(accessToken) && validToken(refreshToken);
  }

  static setToken({ access = null, refresh = null }) {
    if (access) {
      localStorage.setItem(TokenStorage.accessTokenKey, access);
    }
    if (refresh) {
      localStorage.setItem(TokenStorage.refreshTokenKey, refresh);
    }
  }
}
