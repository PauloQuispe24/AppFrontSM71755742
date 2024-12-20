import { Component } from '@angular/core';
import { PostViewmodelService } from '../../viewmodels/post-viewmodel.service';
import { PostResponse } from '../../models/post-response.model';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-posts',
  imports: [MaterialModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts : PostResponse[] = []
  displayedColumns: string[] = ['id', 'title', 'body'];

  constructor(private postViewModel: PostViewmodelService){

  }

  ngOnInit(): void {
    this.postViewModel.listarPosts().subscribe({
      next: (response) => {
        console.log(response)
        this.posts = response
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
