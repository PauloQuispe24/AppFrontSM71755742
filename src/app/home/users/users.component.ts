import { Component } from '@angular/core';
import { UserViewmodelService } from '../../viewmodels/user-viewmodel.service';
import { UserResponse } from '../../models/user-response.model';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-users',
  imports: [MaterialModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  users : UserResponse[] = []
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private userViewModel: UserViewmodelService){

  }

  ngOnInit(): void {
    this.userViewModel.listarUsers().subscribe({
      next: (response) => {
        console.log(response)
        this.users = response
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
