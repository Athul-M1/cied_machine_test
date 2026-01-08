import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): boolean {
    // Dummy credentials
    if (email === 'admin@gmail.com' && password === '123456') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}
