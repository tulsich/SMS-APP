// src/services/AuthService.js
class AuthService {
  static login(username, password) {
    return username === 'admin' && password === 'admin';
  }
}

export default AuthService;
