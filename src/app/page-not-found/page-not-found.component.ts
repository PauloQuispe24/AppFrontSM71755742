import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [MaterialModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goHome() {
    this.router.navigate(['/home'], { relativeTo: this.route });
  }

}
