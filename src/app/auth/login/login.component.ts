import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private validUsuario = 'SM71755742';
  private validPassword = '24012003';

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  login(usuario: HTMLInputElement, password: HTMLInputElement) {
    if (usuario.value == this.validUsuario && password.value == this.validPassword) {
      this.authService.login(usuario.value, password.value);
      this.router.navigateByUrl('/home');
    } else {
      alert('Código o contraseña incorrectos.');
    }
  }
}
