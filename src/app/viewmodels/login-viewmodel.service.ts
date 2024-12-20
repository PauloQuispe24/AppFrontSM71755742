import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(usuario: string, password: string) {
    sessionStorage.setItem('token', 'true');
    sessionStorage.setItem('usuario', usuario);
  }

  logout() {
    sessionStorage.clear();
  }

  isLogin(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
