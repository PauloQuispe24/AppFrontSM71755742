import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    const token = this.authService.isLogin();
    if (!token) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
