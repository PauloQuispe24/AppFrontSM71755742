import { Component } from '@angular/core';
import { PostViewmodelService } from '../../viewmodels/post-viewmodel.service';
import { PostResponse } from '../../models/post-response.model';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts : PostResponse[] = []

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
